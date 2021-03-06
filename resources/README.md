# Resources

A Resource is a data entity that has an ID and belongs to a type.

Resource data is usually stored somewhere (like a remote storage or database) and is often used in APIs.

Both Client and Server code can use and extend Resources.

Properties of all Resources (from `BaseResource`):

* `id` - the remote ID of the Resource. E.g., `"123"`.
* `type` - the Resource type. It's a shortened version of the "table" name (see next section).
* `path` (read-only) - returns the Resource path, in the format `type/ID`. E.g., `"ch/123"`. Returns `null` if either the type or ID is null.
* `filename` (read-only) - returns the full path of the storage file, which is different from the Resource path.

Methods:

* `patch(data)` - fills the instance attributes with data (see next section about property names).
* `fingerprint()` - returns a SHA-256 hash comprised of the Resource's `identity()`. Used for cache and versioning.
* `identity()` - returns a string with all values required for fingerprinting.

### Shortened Names

Resources can be understood as "database models".

All Resources use shortened names for their "tables" and "columns". It only affects data that is saved in some sort of storage. It helps reducing data storage and transfer usage.

The `patch(data)` method only accepts object literals with shortened column names. Property names inside Resource objects themselves use their normal, long versions.

In the list of Resources that follows below, shortened names are shown inside brackets after the Resource name (e.g., `ch` would be the "table name" for `CharacterResource`) and properties (e.g., `ch` would represent the "column name" for a `characterId` property in different Resources).

## GameResource (`Game`)

A "Game" is used to isolate certain aspects of gameplay (like progression) in their own "universes".

Properties:

* `name` (`n`) - Game name.
* `description` (`d`) - a long description of the game.
* `currencyId` (`cr`) - ID of the Currency that represents experience to reach next level in this game.
* `progression` (`tb`) - progression table. It's an array of levels and their requirements:
  * `level` (`l`) - Level number.
  * `amount` (`v`) - amount of XP required to reach this Level from the previous one.

For now, the only record available will be the main fighting game, but it will hold other games in the future.

## GeometryResource (`Geo`)

A Geometry holds vertices, faces, and other 3D information that are necessary to render a 3D object on the screen.

Geometries are used to render mostly everything, such as Items, Character Costume parts, Effects, terrain, sky boxes, etc.

Properties:

* `parent` - ID of parent Geometry. Parent will be loaded and merged into this resource before other attributes are applied.
* `vertices` (`v`) - an array of `Vertex` objects.
* `faces` (`f`) - an array of `Face` objects.
* `regions` (`r`) - an array of `Region` objects.
* `morphs` (`m`) - an array of `Morph` objects.
* `skeleton` (`sl`) - an instance of `Skeleton`, for skinned geometries.
* `bones` (`m`) - an array of `Bone` objects that the geometry uses for skinning.

## SchematicResource (`Sch`)

A `SchematicResource` holds all information needed to create a Item. It is a combination of Geometries, Points, and Lights.

Properties:

* `name` (`n`)
* `unlockable` (`u`) - `true` if this Schematic needs to be unlocked to be accessible by players in costume creation.
* `parts` (`p`) - a collection of `SchematicPart` objects:
  * `id` - part ID.
  * `resourceType` (`rT`) - possible values: `"g"` (geometry), `"p"` (point), `"l"` (light), `"w"` (wire/line).
  * `resourceId` (`rI`) - part type ID. Example: when `type` is a geometry, this property holds the geometry ID.
  * `parent` (`par`) - parent part ID. First object is always "root". All other objects must have a parent.
  * `position` (`p`) - contains a `Vector3` object.
  * `rotation` (`r`) - contains a `Vector3` object.
  * `quaternion` (`q`) - contains a `Quaternion` object.
  * `scale` (`s`) - contains a `Vector3` object.
  * `lightType` (`l`) - only for light parts. Possible values: `"a"` (ambient light), `"s"` (spotlight), `"d"` (directional light), `"h"` (hemisphere light).
  * `castShadow` (`cs`) - determines if rendered geometry casts shadows, or if light casts shadows. Not applicable to points.
  * `receiveShadow` (`rs`) - determines if rendered geometry receives shadows. Not applicable to points.
  * `outline` (`o`) - `true` if rendered geometry should have an outline effect. Not applicable to points and lights.
  * `slot` (`sl`) - slot name. Only applicable to points. Allows other Items (accessories) to be attached to this slot.
* `regions` (`r`) - a collection of paintable `SchematicRegion` objects:
  * `id` - region ID.
  * `name` (`n`) - region name, visible to the player.
  * `material` (`m`) - material type. Possible values: `"b"` (Basic), `"t"` (Toon).
  * `side` (`s`) - face rendering mode. Possible values: `"f"` (front-side, default), `"b"` (back-side), `"d"` (double-side).
  * `color` (`c`) - default color of this region.
  * `alpha` (`a`) - transparency amount, where `0.0` is fully transparent and `1.0` (default) is fully opaque.
  * `fixed` (`f`) - if `true`, this region's color can't be customized by the player. Used for gutters.
  * `scope` (`sc`) - used for Material instancing. Possible values: `"g"` (use global material, can't be changed), `"c"` (use character material, will change according to character), `"i"` (new material instance, required if material attributes are subject to change at runtime).
  * `parts` (`p`) - a collection of `SchematicRegionPart` objects:
    * `id` - part ID.
    * `regions` (`r`) - array of Region IDs from that part.

## ItemResource (`Itm`)

An Item is the resulting creation from a Schematic. In regards to data storage, an Item is always in the possession of a character or a stage.

The same Schematic can generate multiple copies of the same Item, and each copy can be customized with its own colors and modifiers.

Properties:

* `id` - Item ID. Repeated Items generated from the same Schematic must have their own IDs.
* `schematic` (`sch`) - Schematic ID.
* `ownerType` (`oT`) - owner type. Possible values: `"c"` (Character), `"s"` (Stage).
* `ownerId` (`oI`) - owner ID.
* `color` (`c`) - default color for all parts.
* `regions` (`r`) - an optional collection of `ItemRegion` objects:
  * `id` - SchematicRegion ID that should be painted.
  * `color` (`c`) - color ID. Can be a fixed color (by X11 name) or a character color code (`c0` to `c9`, `e0` or `e1`, `l0` or `l1`).
* `parts` (`p`) - an optional collection of `ItemPart` objects:
  * `id` - part ID to customize.
  * `position` (`p`) - position offset (incremental). A `Vector3` object.
  * `rotation` (`r`) - rotation offset (incremental). A `Vector3` object.
  * `scale` (`s`) - scale offset (incremental). A `Vector3` object.
  * `color` (`c`) - light color, or geometry default color. Not applicable to points.
  * `intensity` (`i`) - light intensity. Not applicable to geometries or points.

## PoseResource (`Po`)

This Resource holds the bone rotations of a given Skeleton.

Properties:

* `name` (`n`) - name of the Pose.
* `skeleton` (`sl`) - Skeleton ID the Pose is compatible with (e.g., `"human"`).
* `rotations` (`r`) - a collection of `BoneRotation` objects:
  * `id` - Bone ID to rotate.
  * `x`/`y`/`z` - Euler rotation values in radians. Defaults to zero.
  * `quaternion` (`q`) - array of quaternion values (x, y, z, w). If present, will be used to generate Euler rotations. This exists to allow Bones to change their rotation order if needed.
  * `position` (`p`) - `true` if coordinates represent position, not rotation.

## AnimationResource (`Ani`)

An Animation contains a list of Poses that are applied to a Character's Skeleton within a timeframe.

Properties:

* `name` (`n`)
* `skeleton` (`sl`) - Skeleton ID the Animation is compatible with.
* `length` (`l`) - the total lenght of the animation in frames.
* `keyframes` (`k`) - a collection of `AnimationKeyframe` objects:
  * `frame` (`f`) - frame number.
  * `poses` (`p`) - an array of poses that should be activated on that keyframe.
  * `pose` (runtime only) - a computed pose resulted of merging all poses involved in the keyframe. Used for performance.
  * `reset` (`r`) - a boolean indicating if the skeleton pose should be reset before applying the pose. Used for performance.

## CharacterResource (`Ch`)

A `CharacterResource` can be either a Character created by a Player, or a NPC (Non-Player Character).

This resource only holds information about a Character in regards of gameplay. Character profile data is held by `CharacterBuildResource`.

Properties:

* `user` (`usr`) - ID of the User who created the Character. For NPCs, this property is equal to `"npc"`.
* `skeleton` (`sl`) - Character's Skeleton ID (e.g., `"human"`)
* `build` (`bd`) - default Build. See `CharacterBuildResource` for details.
* `firstName` (`fN`) - Character's first name.
* `middleNames` (`mN`) - Character's middle names.
* `lastName` (`lN`) - Character's last name.
* `gender` (`g`) - `"m"` (male), `"f"` (female), or `"n"` (not given)
* `country` (`c`) - code of the Character's country of representation (not necessarily origin).

## EnhancementInventoryResource (`EInv`)

This Resource holds one Enhancement in possession of the Player.

Properties:

* `userId` (`usr`)
* `enhancementId` (`en`)
* `characterId` (`ch`) - will be present if Enhancement is bound to a specific character (cannot be used on a different character). Some character-oriented rewards (story missions, AI leagues, etc) will have this property set.
* `bound` (`b`) - `true` if bound to player (cannot be traded). Some player-oriented rewards will have this property set.

## CharacterFightingStyleResource (`ChF`)

This Resource holds a single Fighting Style that a Character has unlocked.

Properties:

* `characterId` (`ch`)
* `fightingStyleId` (`fs`)

## CharacterSkillResource (`ChS`)

This Resource holds a single Skill that a Character has earned.

Properties:

* `characterId` (`ch`)
* `skillId` (`sk`)
* `level` (`l`)
* `animationId` (`ani`) - Animation to override default, a.k.a. Skill "Skin".
* `enhancements` (`en`) - an array of Character Enhancement IDs that are slotted into this Skill.
* `flags` (`fl`) - an array of Skill Flags currently active for this Skill.

## CinematicResource (`Cnm`)

A Cinematic is a fixed sequence of Animations involving two Characters, camera angles, and additional effects.

Properties:

* (TBD)

## CurrencyResource (`Cr`)

This Resource holds information about a Currency.

Properties:

* `name` (`n`)

## EnhancementResource (`En`)

Enhancements are items that can be slotted into Skills to improve them.

Properties:

* `name` (`n`)
* `bonuses` (`b`) - array of bonuses applied by the Enhancement:
  * `target` (`t`) - `"a"` for Attribute (Active or Passive)
  * `id` (`i`) - ID of the target (e.g., `"STR"` for enhancing the Strength Attribute).
  * `amount` (`v`) - bonus amount.

## FightingStyleResource (`Fs`)

This Resource contains information about Fighting Styles.

Properties:

* `name` (`n`)
* `country` (`c`) - code of country of origin.
* `bonuses` (`b`) - a collection of Attribute bonuses applied to Characters that choose this Fighting Style.

## MatchResource (`Mt`)

This Resource holds informations about a match between multiple Characters.

Properties:

* `type` (`tp`) - Match type:
  * `"v"` - solo 1v1 (default).
  * `"t"` - team, one fighter from a team active at a time, one after another (no switching).
  * `"g"` - tag, same as team, but with active switching.
  * `"r"` - battle royale, all fighters active at the same time.
* `teams` (`tm`) - an array of `Team` objects:
  * `index` (`i`) - Team index. Usually starts from `0` up to how many Teams are currently playing. Teams of one fighter each are created for solo matches.
  * `side` (`s`) - screen side this Team will be placed. `"l"` for left, `"r"` for right.
  * `color` (`c`) - team color, in HEX format. Defaults to blue/green for left-side teams, red/orange for right-side teams.
  * `fighters` (`f`) - map of `Fighter` instances that belong to this team:
    * `build` - `CharacterBuildResource` instance. The Build ID is used as the Fighter's map key.
    * `ai` - `AiResource` instance that controls this Fighter. Will be `null` for input-controlled fighters.
    * `rig` - `RigResource` used to render this Fighter on the client.
    * `character` - `CharacterResource` instance. Used to give rewards.
    * `active` (runtime only) - Fighter is currently active in a round.
    * `attributes` - a map of computed Attributes from the build.
    * `skills` - a map of computed Skills from the build.
      * `skill` - `SkillResource` instance.
      * `slot` - Skill Slot. This is used as the map key. Slots are usually named after input sequences, such as `"idle"`, `"walkF"`, `"236L"`, etc. Values for those slots are the computed skills themselves.
      * `keyframes` - array of computed Skill Keyframes.
    * `inputs` (runtime only) - an array of ordered `InputSequence` instances that the `Fighter` instance will listen to while receiving inputs. If a sequence is completed, it will fire the skill assigned to that sequence's slot.
* `ft` - "first to". First Team to reach this number of round victories wins the match. May have different defaults depending on match type.
* `time` (`t`) - time limit per round in seconds. Defaults to 99.
* `rounds` (`r`) - an array of rounds:
  * `number` (`n`) - the round number. Starts with 1.
  * `time` (`t`) - remaining time in seconds.
  * `started` (`s`) - UTC time the round started.
  * `finished` (`f`) - `true` if the round has ended.
  * `events` (`e`) - an array of client messages belonging to the round.
* `active` (`a`) - `true` if the match is listening to player inputs.
* `winner` (`w`) - Team index that won the match.
* `ragequit` (`q`) - array of Fighter IDs that rage-quit'd the match. If all Characters in a Team ragequit or disconnect, the opposing Team is declared the winner.
* `saved` (`s`) - `true` if replay information has been saved for this match and uploaded to the API.
* `rewards` (`cr`) - an array of rewards given to each Character, including losers, after each round ends:
  * `round` (`r`) - Round number. Will be `null` for Match-wide rewards.
  * `characterId` (`ch`)
  * `currencyId` (`cr`)
  * `amount` (`v`) - amount can be negative (damage costs, etc).
* `training` - `true` if this is a training match. Training matches never end, and may be reused and altered while it's running.

## MechanicResource (`Mc`)

This Resource refers to a single fighting game Mechanic, which can be unlocked by leveling up Masteries.

Properties:

* `name` (`n`)
* `description` (`d`)
* `skillId` (`sk`) - ID of the Mastery that unlocks this Mechanic.
* `level` (`l`) - Mastery level required to unlock this Mechanic.

## PaletteResource (`Pal`)

A Palette is a list of Colors that the Player can use to assign colors to certain Character details, and also color Items in their inventory.

Properties:

* `characterId` (`ch`) - ID of the Character the Palette belongs to.
* `name` (`n`) - Palette name, editable by the Player.
* `color0` to `color9` (`c0` to `c9`) - up to ten colors in HEX format.
* `eye0` and `eye1` (`e0`, `e1`) - color for the Character's eyes.
* `light0` and `light1` (`l0`, `l1`) - colors for Character's lights, for Costume pieces that have lighting effects.

Eyes and lighting effects can be changed by Skills. It works like this: if a Skill changes a character's eye colors (or lighting on their costumes), it will switch from `eye0` to `eye1`, and `light0` to `light1` So if you don't want the color to change, set the same color to both.

## UserResource (`Usr`)

This Resource represents a human Player.

Properties:

* `handle` (`h`) - Player's username. It can only accept lowercase letters, numbers, and hyphen (only in the middle of the string). Cannot start with a number.

## CharacterBuildResource (`Bd`)

A Character Build holds personal information about a Character in a given time and universe (like a snapshot).

A Character can have more than one Build (alternate personas, younger versions, builds for different games, etc).

Everything that's related to gameplay is tied to a Build rather than a Character, so that different Builds can have completely different gameplay styles while referring to the same Character.

Properties:

* `character` (`ch`)
* `game` - `GameResource` this Build belongs to.
* `level` (`lv`)
* `shortName` (`sN`) - Character's nickname. This is the name that appears on the HUD (Health bar).
* `fightingStyle` (`fs`) - the Fighting Style chosen upon Character creation.
* `firstName` (`fN`) - Character's first name. `[1]`
* `middleNames` (`mN`) - Character's middle names. `[1]`
* `lastName` (`lN`) - Character's last name. `[1]`
* `gender` (`g`) - `"m"` (male), `"f"` (female), or `"n"` (not given) `[1]`
* `country` (`c`) - code of the Character's country of origin. May differ between Character Builds for alternate realities, etc. `[1]`
* `bio` (`b`) - long text with brief character biography.
* `date` (`dt`) - Date of bio. Determines character age. Used for flashback profiles, etc.
* `pose` (`po`) - Pose to use in Fighter Select and other screens or pages.

`[1]` these fields are optional, and may be filled if the build has a different name/gender from the Character itself.

## RigResource (`Rig`)

A Rig represents a Skeleton with a number of Items mounted at its Bone locations.

It's used for costumes and stage items.

Properties:

* `characterBuild` (`bd`) - Character Build this Rig belongs to. Will be null for stage items.
* `skeleton` (`sl`)
* `items` (`i`) - array of `RigItem` objects:
  * `id` - Item ID.
  * `slot` (`s`) - Bone slot this Item should be attached onto.

## SkeletonResource (`Sl`)

This Resource holds the definitions of a Skeleton.

Many `CharacterResource`s can share a single `SkeletonResource`. However, Skeleton renderables aren't reusable because their runtime rotations are character-dependent. Clients must attach the Skeleton renderable to the Character instance itself.

Properties:

* `bones` (`b`) - a collection of `Bone` objects:
  * `id` - Bone ID.
  * `parent` (`par`) - Parent Bone.
  * `position` (`p`) - a `Vector3` position of the end of the bone.
  * `rotationOrder` (`rO`) - rotation order of the bone. Defaults to `"XYZ"`.

## SkillResource (`Sk`)

A Skill represents a fighting game move or technique.

Properties:

* `alias` (`as`) - normalized ID of the Skill. Used in Daily Practice, AI, and other mechanics.
* `name` (`n`) - name of the Skill.
* `parent` (`par`) - ID of the parent Skill.
* `minimumLevel` (`min`) - minimum level this Skill is usable. Usually 1 for Active Skills and 0 for Masteries.
* `maximumLevel` (`max`) - maximum level of the Skill. Defaults to 10.
* `fightingStyleIds` (`fs`) - an array of Fighting Style IDs that Characters need to belong to, to be able to use this Skill.
* `keyframes` (`k`) - a collection of `SkillKeyframe` objects with information about animations, hitboxes, positioning, and other details.
  * `frame` (`f`) - frame number where this keyframe becomes active. First frame is 1, not 0.
  * `animation` (`am`) - Animation to execute at this keyframe.
  * `flagAdd` (`flA`) - array of flags to add to `skill.flags`.
  * `flagRemove` (`flR`) - array of flags to remove from `skill.flags`.
  * `moveForward` (`mF`) - move Character forward by this amount when this keyframe is reached. Can be negative (move back).
  * `moveUpward` (`mU`) - move Character upward by this amount when this keyframe is reached. Can be negative (move down).
  * `boxes` (`b`) - array of collision box definitions to apply to the character:
    * `id` - ID of the collision box:
      * `o1/2/3` - hitbox (outgoing)
      * `i1/2/3` - hurtbox (incoming)
      * `s` - space box - for pass-thru mechanics
      * `t` - throwable box
      * `ap` - attack proximity box - causes the enemy to block if they're holding back
    * `active` (`a`) - boolean to activate/deactivate the collision box.
    * `x`/`y` - collision box position.
    * `width`/`height` (`w`/`h`) - collision box size.
    * `onHit` - Skill ID to execute on hit. Can be null.
    * `onBlock` - Skill ID to execute on block. Can be null.
* `loop` (`l`) - when `false`, will try to `idle` when this Skill finishes. Otherwise it will keep looping until an external condition cancels it.
* `cancelOnGround` (`cG`) - when `true` and Character reaches the ground (positionY = 0), this Skill will be cancelled and whatever Skill is slotted as "landed" will be executed. Used for things like diving attacks.
* `flags` (`fl`) - an array of initial flags for this Skill.
* `one` - one frame mode. Skill has only one frame. If `loop` is true, the first frame will not be reapplied.

## SkillSkin (`Ss`)

A Skill Skin links a single skill to several animations that can be used to represent that Skill in-game.

Properties:

* `skillId` (`sk`)
* `animationId` (`am`)
* `fightingStyles` (`fs`) - an array of Fighting Styles that are able to use this animation.

## AiResource (`Ai`)

This Resource holds a complete AI build needed for the CPU to control a Character.

Properties:

* `characterBuild` (`bd`) - CharacterBuild this AI build belongs to.
* `name` (`n`) - name of the build.
* `memory` (`m`) - list of `AiMemoryResource` objects containing memorized Skills and their timeouts.
* `actions` (`a`) - list of `AiActionResource` objects containing the flow of the AI build.
* `attributes` (`att`) - list of `AiAttribute` objects with the AI Attribute values for this build:
  * `memory` (`m`)
  * `execution` (`e`)
  * `reaction` (`r`)
  * `confirms` (`c`)
  * `mindfulness` (`p`)

## AiActionResource (`AiA`)

This Resource holds a single AI Action for a Character.

Properties:

* `aiId` (`ai`) - ID of the AI this action belongs to.
* `priority` (`p`) - an arbitrary integer. Higher value means higher precedence. If two actions have the same priority, the one created first will take precedence. Defaults to zero.
* `idle` (`i`) - when `true`, this action is cancellable into reactions (other actions with `skillId`). Mutually exclusive with `skillId`.
* `chance` (`c`) - chance of activation as a float between 0 and 1, where 1 means 100% chance.
* `minDistance` (`miD`) - minimum enemy distance for the action to activate, in centimeters. Defaults to zero.
* `maxDistance` (`maD`) - maximum enemy distance for the action to activate, in centimeters. Defaults to full screen distance (value TBD).
* `airborne` (`air`) - set to `true` to make this action only executable while the Character is in the air.
* `aiMemoryId` (`aim`) - (optional) ID of the Memory with the Skill the enemy will execute that triggers this action. When present, the action will be flagged as "reaction". The Memory must be valid (not forgotten) for this reaction to be executable.
* `inputSequenceId` (`in`) - input sequence to enter if action rolls successfully. Can be a single button/directional press or a complete sequence. The accuracy and speed of the entered sequence depends on the __Execution__ AI Attribute.
* `nextActionId` (`n`) - instead of entering an input sequence, the successful activation of this action can reroute to another action. Mutually exclusive with `inputSequenceId`.

## AiMemoryResource (`AiM`)

This Resource holds a single memorized Skill that was used against a Character.

Properties:

* `aiId` (`ai`) - ID of the AI build this Memory belongs to.
* `skillId` (`sk`) - ID of the memorized Skill.
* `date` (`dt`) - the date the Memory has been last updated.
* `days` (`d`) - an integer that represents how many days it will take to forget the Skill.
* `practice` (`p`) - an integer that represents how many times the Skill has been used against the Character within `date`.

To determine if a skill has been forgotten, the `days` and `practice` properties must both be zero.

A "Memory Refresh" occurs before the memory is used in a match, where the following operations take place:

* calculates `delta`, which is the difference in days between the value of `date` property and the current date;
  * if `delta` is zero, steps below won't execute.
* `date` property is set to the current date;
* `days` property is decreased by `delta`, and cannot go below zero;
* `days` property is incremented by the value of `practice` property; and
* `practice` property is then set to zero.

The maximum allowed value of the `practice` property depends on the __Memory__ AI Attribute, as follows (tentative values and formulae):

* It has a base value of 2.
* It's then incremented by the integer result of: `MemoryAttribute / 5`.
* It means the maximum value of this property is 12 (at __50 Memory__: `2 + (50/5)`).

So, the higher the __Memory__ Attribute, the more days it can take for the Skill to be forgotten.
