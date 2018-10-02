// Measurements in cm.
// Directions reference, from character POV:
// - left +x, right -x
// - front +z, back -z

const NECK_HEIGHT = 10
// const SHOULDER_HEIGHT = 3
const SHOULDER_OFFSET = 14
const CHEST_HEIGHT = 16
// const CHEST_WIDTH = 32
const ABDOMEN_HEIGHT = 14
const HIP_HEIGHT = 11
// const HIP_WIDTH = 31
// const HIP_DEPTH = 12

const ARM_UPPER_HEIGHT = 30
const ARM_LOWER_HEIGHT = ARM_UPPER_HEIGHT

const PALM_HEIGHT = 10
const FINGER_SEGMENT_HEIGHT = 5
const FINGER_SEGMENT_HEIGHT_90 = 4
const FINGER_SEGMENT_HEIGHT_80 = 3
const FINGER_WIDTH = 3

const THUMB_WIDTH = FINGER_WIDTH
const THUMB_OFFSET = 4.5
const THUMB_SEGMENT_HEIGHT = FINGER_SEGMENT_HEIGHT

const INDEX_OFFSET = 4.5
const MIDDLE_OFFSET = 1.4
const RING_OFFSET = -1.8
const PINKY_OFFSET = -4.9

const LEG_UPPER_HEIGHT = 50
const LEG_LOWER_HEIGHT = LEG_UPPER_HEIGHT
const LEG_OFFSET = 8

const FOOT_HEIGHT = 10
const FOOT_BASE_DEPTH = 12

export default {
  id: 'h',
  n: 'Human',
  b: [
    /* Root */ { id: '_' },
    { id: 'Cn' /* Center */, par: '_', p: { y: HIP_HEIGHT + LEG_UPPER_HEIGHT + LEG_LOWER_HEIGHT + FOOT_HEIGHT } },
    { id: 'W' /* Waist/Hip */, par: 'Cn', rO: 'YXZ' },
    { id: 'LUL' /* Leg Upper Left */, par: 'W', rO: 'XZY', p: { x: LEG_OFFSET, y: -HIP_HEIGHT } },
    { id: 'LUR', par: 'W', rO: 'XZY', p: { x: -LEG_OFFSET, y: -HIP_HEIGHT } },
    { id: 'LLL' /* Leg Lower Left */, par: 'LUL', p: { y: -LEG_UPPER_HEIGHT } },
    { id: 'LLR', par: 'LUR', p: { y: -LEG_UPPER_HEIGHT } },
    { id: 'FL' /* Foot Left */, par: 'LLL', rO: 'XZY', p: { y: -LEG_LOWER_HEIGHT } },
    { id: 'FR', par: 'LLR', rO: 'XZY', p: { y: -LEG_LOWER_HEIGHT } },
    { id: 'TL' /* Toes Left */, par: 'FL', p: { y: -FOOT_HEIGHT, z: FOOT_BASE_DEPTH } },
    { id: 'TR', par: 'FR', p: { y: -FOOT_HEIGHT, z: FOOT_BASE_DEPTH } },
    { id: 'A' /* Abdomen */, par: 'Cn' },
    { id: 'S' /* Stomach */, par: 'A', p: { y: ABDOMEN_HEIGHT } },
    { id: 'C' /* Chest */, par: 'S', p: { y: ABDOMEN_HEIGHT } },
    { id: 'N' /* Neck */, par: 'C', p: { y: CHEST_HEIGHT } },
    { id: 'H' /* Head */, par: 'N', p: { y: NECK_HEIGHT } },
    { id: 'SL' /* Shoulder Left */, par: 'C', rO: 'YXZ', p: { x: SHOULDER_OFFSET, y: CHEST_HEIGHT } },
    { id: 'SR', par: 'C', rO: 'YXZ', p: { x: -SHOULDER_OFFSET, y: CHEST_HEIGHT } },
    { id: 'AUL' /* Arm Upper Left */, par: 'SL', p: { x: 10, y: -10 } },
    { id: 'AUR', par: 'SR', p: { x: -10, y: -10 } },
    { id: 'ALL' /* Arm Lower Left */, par: 'AUL', p: { y: -ARM_UPPER_HEIGHT } },
    { id: 'ALR', par: 'AUR', p: { y: -ARM_UPPER_HEIGHT } },
    { id: 'PL' /* Palm Left */, par: 'ALL', p: { y: -ARM_LOWER_HEIGHT } },
    { id: 'PR', par: 'ALR', p: { y: -ARM_LOWER_HEIGHT } },
    { id: 'TBL' /* Thumb */, par: 'PL', p: { x: THUMB_OFFSET } },
    { id: 'TML', par: 'TBL', p: { x: THUMB_WIDTH / 2, y: -THUMB_SEGMENT_HEIGHT } },
    { id: 'TTL', par: 'TML', p: { y: -THUMB_SEGMENT_HEIGHT } },
    { id: 'TBR', par: 'PR', p: { x: -THUMB_OFFSET } },
    { id: 'TMR', par: 'TBR', p: { x: -THUMB_WIDTH / 2, y: -THUMB_SEGMENT_HEIGHT } },
    { id: 'TTR', par: 'TMR', p: { y: -THUMB_SEGMENT_HEIGHT } },
    { id: 'IBL' /* Index */, par: 'PL', p: { x: INDEX_OFFSET, y: -PALM_HEIGHT } },
    { id: 'IML', par: 'IBL', p: { y: -FINGER_SEGMENT_HEIGHT } },
    { id: 'ITL', par: 'IML', p: { y: -FINGER_SEGMENT_HEIGHT_90 } },
    { id: 'IBR', par: 'PR', p: { x: -INDEX_OFFSET, y: -PALM_HEIGHT } },
    { id: 'IMR', par: 'IBR', p: { y: -FINGER_SEGMENT_HEIGHT } },
    { id: 'ITR', par: 'IMR', p: { y: -FINGER_SEGMENT_HEIGHT_90 } },
    { id: 'MBL' /* Middle */, par: 'PL', p: { x: MIDDLE_OFFSET, y: -PALM_HEIGHT } },
    { id: 'MML', par: 'MBL', p: { y: -FINGER_SEGMENT_HEIGHT } },
    { id: 'MTL', par: 'MML', p: { y: -FINGER_SEGMENT_HEIGHT } },
    { id: 'MBR', par: 'PR', p: { x: -MIDDLE_OFFSET, y: -PALM_HEIGHT } },
    { id: 'MMR', par: 'MBR', p: { y: -FINGER_SEGMENT_HEIGHT } },
    { id: 'MTR', par: 'MMR', p: { y: -FINGER_SEGMENT_HEIGHT } },
    { id: 'RBL' /* Ring */, par: 'PL', p: { x: RING_OFFSET, y: -PALM_HEIGHT } },
    { id: 'RML', par: 'RBL', p: { y: -FINGER_SEGMENT_HEIGHT_90 } },
    { id: 'RTL', par: 'RML', p: { y: -FINGER_SEGMENT_HEIGHT_90 } },
    { id: 'RBR', par: 'PR', p: { x: -RING_OFFSET, y: -PALM_HEIGHT } },
    { id: 'RMR', par: 'RBR', p: { y: -FINGER_SEGMENT_HEIGHT_90 } },
    { id: 'RTR', par: 'RMR', p: { y: -FINGER_SEGMENT_HEIGHT_90 } },
    { id: 'PBL' /* Pinky */, par: 'PL', p: { x: PINKY_OFFSET, y: -PALM_HEIGHT } },
    { id: 'PML', par: 'PBL', p: { y: -FINGER_SEGMENT_HEIGHT_80 } },
    { id: 'PTL', par: 'PML', p: { y: -FINGER_SEGMENT_HEIGHT_80 } },
    { id: 'PBR', par: 'PR', p: { x: -PINKY_OFFSET, y: -PALM_HEIGHT } },
    { id: 'PMR', par: 'PBR', p: { y: -FINGER_SEGMENT_HEIGHT_80 } },
    { id: 'PTR', par: 'PMR', p: { y: -FINGER_SEGMENT_HEIGHT_80 } }
  ]
}
