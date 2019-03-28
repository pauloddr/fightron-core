import {
  PALM_WIDTH,
  PALM_HEIGHT,
  PALM_DEPTH,
  THUMB_WIDTH,
  THUMB_DEPTH,
  THUMB_MID_HEIGHT,
  THUMB_TIP_HEIGHT,
  FINGER_DEPTH,
  INDEX_MID_HEIGHT,
  INDEX_TIP_HEIGHT,
  INDEX_BASE_HEIGHT,
  MIDDLE_MID_HEIGHT,
  MIDDLE_BASE_HEIGHT,
  MIDDLE_TIP_HEIGHT,
  RING_BASE_HEIGHT,
  RING_MID_HEIGHT,
  RING_TIP_HEIGHT,
  PINKY_BASE_HEIGHT,
  PINKY_MID_HEIGHT,
  PINKY_TIP_HEIGHT
} from '../../skeletons/human-constants';

/*

Skeleton Indexes:
0 - Palm
1, 2, 3 - Thumb
4, 5, 6 - Index
7, 8, 9 - Middle
10, 11, 12 - Ring
13, 14, 15 - Pinky

 */

export default {
  id: 'b1-hand-left',
  sl: 'h',
  b: [
    'PL',
    'TBL', 'TML', 'TTL',
    'IBL', 'IML', 'ITL',
    'MBL', 'MML', 'MTL',
    'RBL', 'RML', 'RTL',
    'PBL', 'PML', 'PTL'
  ],
  v: [
    { id: 'palm-front-top-left', x: -PALM_WIDTH / 3, y: 0, z: PALM_DEPTH / 1.5, mi: 'palm-front-top-right' },
    { id: 'palm-front-middle', x: PALM_WIDTH / 2, y: -PALM_WIDTH / 2, z: PALM_DEPTH / 2 },
    { id: 'palm-front-bottom-left', x: -PALM_WIDTH / 2, y: -PALM_WIDTH, z: PALM_DEPTH / 2, mi: 'palm-front-bottom-right' },
    { id: 'palm-front-bottom-left-mid', x: -PALM_WIDTH / 4, y: -PALM_WIDTH, z: PALM_DEPTH / 2, mi: 'palm-front-bottom-right-mid' },
    { id: 'palm-front-bottom-center', x: 0, y: -PALM_WIDTH, z: PALM_DEPTH / 2 },

    { id: 'palm-back-top-left', x: -PALM_WIDTH / 3, y: 0, z: -PALM_DEPTH / 1.5, mi: 'palm-back-top-right' },
    { id: 'palm-back-middle', x: PALM_WIDTH / 2, y: -PALM_WIDTH / 2, z: -PALM_DEPTH / 2 },
    { id: 'palm-back-bottom-left', x: -PALM_WIDTH / 2, y: -PALM_WIDTH, z: -PALM_DEPTH / 2, mi: 'palm-back-bottom-right' },
    { id: 'palm-back-bottom-left-mid', x: -PALM_WIDTH / 4, y: -PALM_WIDTH, z: -PALM_DEPTH / 2, mi: 'palm-back-bottom-right-mid' },
    { id: 'palm-back-bottom-center', x: 0, y: -PALM_WIDTH, z: -PALM_DEPTH / 2 },

    { id: 'thumb-front-base', x: (PALM_WIDTH / 2) + THUMB_WIDTH, y: -PALM_HEIGHT / 2, z: THUMB_DEPTH / 2 },
    { id: 'thumb-front-mid-left', x: (PALM_WIDTH / 2), y: (-PALM_HEIGHT / 2) - THUMB_MID_HEIGHT, z: THUMB_DEPTH / 2, sl: [{ i: 2, w: 1 }] },
    { id: 'thumb-front-mid-right', x: (PALM_WIDTH / 2) + THUMB_WIDTH, y: (-PALM_HEIGHT / 2) - THUMB_MID_HEIGHT, z: THUMB_DEPTH / 2, sl: [{ i: 2, w: 1 }] },
    { id: 'thumb-front-tip-left', x: (PALM_WIDTH / 2), y: (-PALM_HEIGHT / 2) - THUMB_MID_HEIGHT - THUMB_TIP_HEIGHT, z: THUMB_DEPTH / 2, sl: [{ i: 3, w: 1 }] },
    { id: 'thumb-front-tip-right', x: (PALM_WIDTH / 2) + THUMB_WIDTH, y: (-PALM_HEIGHT / 2) - THUMB_MID_HEIGHT - THUMB_TIP_HEIGHT, z: THUMB_DEPTH / 2, sl: [{ i: 3, w: 1 }] },

    { id: 'thumb-back-base', x: (PALM_WIDTH / 2) + THUMB_WIDTH, y: (-PALM_HEIGHT / 2), z: -THUMB_DEPTH / 2 },
    { id: 'thumb-back-mid-left', x: (PALM_WIDTH / 2), y: (-PALM_HEIGHT / 2) - THUMB_MID_HEIGHT, z: -THUMB_DEPTH / 2, sl: [{ i: 2, w: 1 }] },
    { id: 'thumb-back-mid-right', x: (PALM_WIDTH / 2) + THUMB_WIDTH, y: (-PALM_HEIGHT / 2) - THUMB_MID_HEIGHT, z: -THUMB_DEPTH / 2, sl: [{ i: 2, w: 1 }] },
    { id: 'thumb-back-tip-left', x: (PALM_WIDTH / 2), y: (-PALM_HEIGHT / 2) - THUMB_MID_HEIGHT - THUMB_TIP_HEIGHT, z: -THUMB_DEPTH / 2, sl: [{ i: 3, w: 1 }] },
    { id: 'thumb-back-tip-right', x: (PALM_WIDTH / 2) + THUMB_WIDTH, y: (-PALM_HEIGHT / 2) - THUMB_MID_HEIGHT - THUMB_TIP_HEIGHT, z: -THUMB_DEPTH / 2, sl: [{ i: 3, w: 1 }] },

    { id: 'index-front-base-left', x: (PALM_WIDTH / 4), y: (-PALM_HEIGHT - INDEX_BASE_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 4, w: 0.5 }] },
    { id: 'index-front-base-right', x: (PALM_WIDTH / 2), y: (-PALM_HEIGHT - INDEX_BASE_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 4, w: 0.5 }] },
    { id: 'index-front-mid-left', x: (PALM_WIDTH / 4), y: (-PALM_HEIGHT - INDEX_BASE_HEIGHT - INDEX_MID_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 5, w: 0.5 }] },
    { id: 'index-front-mid-right', x: (PALM_WIDTH / 2), y: (-PALM_HEIGHT - INDEX_BASE_HEIGHT - INDEX_MID_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 5, w: 0.5 }] },
    { id: 'index-front-tip-left', x: (PALM_WIDTH / 4), y: (-PALM_HEIGHT - INDEX_BASE_HEIGHT - INDEX_MID_HEIGHT - INDEX_TIP_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 6, w: 0.5 }] },
    { id: 'index-front-tip-right', x: (PALM_WIDTH / 2), y: (-PALM_HEIGHT - INDEX_BASE_HEIGHT - INDEX_MID_HEIGHT - INDEX_TIP_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 6, w: 0.5 }] },

    { id: 'index-back-base-left', x: (PALM_WIDTH / 4), y: (-PALM_HEIGHT - INDEX_BASE_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 4, w: 0.5 }] },
    { id: 'index-back-base-right', x: (PALM_WIDTH / 2), y: (-PALM_HEIGHT - INDEX_BASE_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 4, w: 0.5 }] },
    { id: 'index-back-mid-left', x: (PALM_WIDTH / 4), y: (-PALM_HEIGHT - INDEX_BASE_HEIGHT - INDEX_MID_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 5, w: 0.5 }] },
    { id: 'index-back-mid-right', x: (PALM_WIDTH / 2), y: (-PALM_HEIGHT - INDEX_BASE_HEIGHT - INDEX_MID_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 5, w: 0.5 }] },
    { id: 'index-back-tip-left', x: (PALM_WIDTH / 4), y: (-PALM_HEIGHT - INDEX_BASE_HEIGHT - INDEX_MID_HEIGHT - INDEX_TIP_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 6, w: 0.5 }] },
    { id: 'index-back-tip-right', x: (PALM_WIDTH / 2), y: (-PALM_HEIGHT - INDEX_BASE_HEIGHT - INDEX_MID_HEIGHT - INDEX_TIP_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 6, w: 0.5 }] },

    { id: 'middle-front-base-left', x: 0, y: (-PALM_HEIGHT - MIDDLE_BASE_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 7, w: 0.5 }] },
    { id: 'middle-front-base-right', x: (PALM_WIDTH / 4), y: (-PALM_HEIGHT - MIDDLE_BASE_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 7, w: 0.5 }] },
    { id: 'middle-front-mid-left', x: 0, y: (-PALM_HEIGHT - MIDDLE_BASE_HEIGHT - MIDDLE_MID_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 8, w: 0.5 }] },
    { id: 'middle-front-mid-right', x: (PALM_WIDTH / 4), y: (-PALM_HEIGHT - MIDDLE_BASE_HEIGHT - MIDDLE_MID_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 8, w: 0.5 }] },
    { id: 'middle-front-tip-left', x: 0, y: (-PALM_HEIGHT - MIDDLE_BASE_HEIGHT - MIDDLE_MID_HEIGHT - MIDDLE_TIP_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 9, w: 0.5 }] },
    { id: 'middle-front-tip-right', x: (PALM_WIDTH / 4), y: (-PALM_HEIGHT - MIDDLE_BASE_HEIGHT - MIDDLE_MID_HEIGHT - MIDDLE_TIP_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 9, w: 0.5 }] },

    { id: 'middle-back-base-left', x: 0, y: (-PALM_HEIGHT - MIDDLE_BASE_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 7, w: 0.5 }] },
    { id: 'middle-back-base-right', x: (PALM_WIDTH / 4), y: (-PALM_HEIGHT - MIDDLE_BASE_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 7, w: 0.5 }] },
    { id: 'middle-back-mid-left', x: 0, y: (-PALM_HEIGHT - MIDDLE_BASE_HEIGHT - MIDDLE_MID_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 8, w: 0.5 }] },
    { id: 'middle-back-mid-right', x: (PALM_WIDTH / 4), y: (-PALM_HEIGHT - MIDDLE_BASE_HEIGHT - MIDDLE_MID_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 8, w: 0.5 }] },
    { id: 'middle-back-tip-left', x: 0, y: (-PALM_HEIGHT - MIDDLE_BASE_HEIGHT - MIDDLE_MID_HEIGHT - MIDDLE_TIP_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 9, w: 0.5 }] },
    { id: 'middle-back-tip-right', x: (PALM_WIDTH / 4), y: (-PALM_HEIGHT - MIDDLE_BASE_HEIGHT - MIDDLE_MID_HEIGHT - MIDDLE_TIP_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 9, w: 0.5 }] },

    { id: 'ring-front-base-left', x: (-PALM_WIDTH / 4), y: (-PALM_HEIGHT - RING_BASE_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 10, w: 0.5 }] },
    { id: 'ring-front-base-right', x: 0, y: (-PALM_HEIGHT - RING_BASE_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 10, w: 0.5 }] },
    { id: 'ring-front-mid-left', x: (-PALM_WIDTH / 4), y: (-PALM_HEIGHT - RING_BASE_HEIGHT - RING_MID_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 11, w: 0.5 }] },
    { id: 'ring-front-mid-right', x: 0, y: (-PALM_HEIGHT - RING_BASE_HEIGHT - RING_MID_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 11, w: 0.5 }] },
    { id: 'ring-front-tip-left', x: (-PALM_WIDTH / 4), y: (-PALM_HEIGHT - RING_BASE_HEIGHT - RING_MID_HEIGHT - RING_TIP_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 12, w: 0.5 }] },
    { id: 'ring-front-tip-right', x: 0, y: (-PALM_HEIGHT - RING_BASE_HEIGHT - RING_MID_HEIGHT - RING_TIP_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 12, w: 0.5 }] },

    { id: 'ring-back-base-left', x: (-PALM_WIDTH / 4), y: (-PALM_HEIGHT - RING_BASE_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 10, w: 0.5 }] },
    { id: 'ring-back-base-right', x: 0, y: (-PALM_HEIGHT - RING_BASE_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 10, w: 0.5 }] },
    { id: 'ring-back-mid-left', x: (-PALM_WIDTH / 4), y: (-PALM_HEIGHT - RING_BASE_HEIGHT - RING_MID_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 11, w: 0.5 }] },
    { id: 'ring-back-mid-right', x: 0, y: (-PALM_HEIGHT - RING_BASE_HEIGHT - RING_MID_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 11, w: 0.5 }] },
    { id: 'ring-back-tip-left', x: (-PALM_WIDTH / 4), y: (-PALM_HEIGHT - RING_BASE_HEIGHT - RING_MID_HEIGHT - RING_TIP_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 12, w: 0.5 }] },
    { id: 'ring-back-tip-right', x: 0, y: (-PALM_HEIGHT - RING_BASE_HEIGHT - RING_MID_HEIGHT - RING_TIP_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 12, w: 0.5 }] },

    { id: 'pinky-front-base-left', x: (-PALM_WIDTH / 2), y: (-PALM_HEIGHT - PINKY_BASE_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 13, w: 0.5 }] },
    { id: 'pinky-front-base-right', x: (-PALM_WIDTH / 4), y: (-PALM_HEIGHT - PINKY_BASE_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 13, w: 0.5 }] },
    { id: 'pinky-front-mid-left', x: (-PALM_WIDTH / 2), y: (-PALM_HEIGHT - PINKY_BASE_HEIGHT - PINKY_MID_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 14, w: 0.5 }] },
    { id: 'pinky-front-mid-right', x: (-PALM_WIDTH / 4), y: (-PALM_HEIGHT - PINKY_BASE_HEIGHT - PINKY_MID_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 14, w: 0.5 }] },
    { id: 'pinky-front-tip-left', x: (-PALM_WIDTH / 2), y: (-PALM_HEIGHT - PINKY_BASE_HEIGHT - PINKY_MID_HEIGHT - PINKY_TIP_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 15, w: 0.5 }] },
    { id: 'pinky-front-tip-right', x: (-PALM_WIDTH / 4), y: (-PALM_HEIGHT - PINKY_BASE_HEIGHT - PINKY_MID_HEIGHT - PINKY_TIP_HEIGHT), z: (FINGER_DEPTH / 2), sl: [{ i: 15, w: 0.5 }] },

    { id: 'pinky-back-base-left', x: (-PALM_WIDTH / 2), y: (-PALM_HEIGHT - PINKY_BASE_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 13, w: 0.5 }] },
    { id: 'pinky-back-base-right', x: (-PALM_WIDTH / 4), y: (-PALM_HEIGHT - PINKY_BASE_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 13, w: 0.5 }] },
    { id: 'pinky-back-mid-left', x: (-PALM_WIDTH / 2), y: (-PALM_HEIGHT - PINKY_BASE_HEIGHT - PINKY_MID_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 14, w: 0.5 }] },
    { id: 'pinky-back-mid-right', x: (-PALM_WIDTH / 4), y: (-PALM_HEIGHT - PINKY_BASE_HEIGHT - PINKY_MID_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 14, w: 0.5 }] },
    { id: 'pinky-back-tip-left', x: (-PALM_WIDTH / 2), y: (-PALM_HEIGHT - PINKY_BASE_HEIGHT - PINKY_MID_HEIGHT - PINKY_TIP_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 15, w: 0.5 }] },
    { id: 'pinky-back-tip-right', x: (-PALM_WIDTH / 4), y: (-PALM_HEIGHT - PINKY_BASE_HEIGHT - PINKY_MID_HEIGHT - PINKY_TIP_HEIGHT), z: (-FINGER_DEPTH / 2), sl: [{ i: 15, w: 0.5 }] }

  ],
  f: [
    { id: 'palm-front-1', a: 'palm-front-top-left', b: 'palm-front-bottom-left', c: 'palm-front-bottom-left-mid' },
    { id: 'palm-front-2', a: 'palm-front-top-left', b: 'palm-front-bottom-left-mid', c: 'palm-front-bottom-center' },
    { id: 'palm-front-3', a: 'palm-front-top-left', b: 'palm-front-bottom-center', c: 'palm-front-bottom-right-mid' },
    { id: 'palm-front-4', a: 'palm-front-top-left', b: 'palm-front-bottom-right-mid', c: 'palm-front-bottom-right' },
    { id: 'palm-front-5', a: 'palm-front-top-left', b: 'palm-front-bottom-right', c: 'palm-front-middle' },
    { id: 'palm-front-6', a: 'palm-front-top-left', b: 'palm-front-middle', c: 'palm-front-top-right' },
    { id: 'palm-back-1', a: 'palm-back-top-left', b: 'palm-back-top-right', c: 'palm-back-middle' },
    { id: 'palm-back-2', a: 'palm-back-top-left', b: 'palm-back-middle', c: 'palm-back-bottom-right' },
    { id: 'palm-back-3', a: 'palm-back-top-left', b: 'palm-back-bottom-right', c: 'palm-back-bottom-right-mid' },
    { id: 'palm-back-4', a: 'palm-back-top-left', b: 'palm-back-bottom-right-mid', c: 'palm-back-bottom-center' },
    { id: 'palm-back-5', a: 'palm-back-top-left', b: 'palm-back-bottom-center', c: 'palm-back-bottom-left-mid' },
    { id: 'palm-back-6', a: 'palm-back-top-left', b: 'palm-back-bottom-left-mid', c: 'palm-back-bottom-left' },
    { id: 'palm-side-1', a: 'palm-front-bottom-left', b: 'palm-front-top-left', c: 'palm-back-top-left' },
    { id: 'palm-side-2', a: 'palm-front-bottom-left', b: 'palm-back-top-left', c: 'palm-back-bottom-left' },
    { id: 'thumb-base-front', a: 'palm-front-top-right', b: 'palm-front-middle', c: 'thumb-front-base' },
    { id: 'thumb-base-back', b: 'palm-back-top-right', a: 'palm-back-middle', c: 'thumb-back-base' },
    { id: 'thumb-base-side-1', a: 'palm-front-top-right', b: 'thumb-front-base', c: 'thumb-back-base' },
    { id: 'thumb-base-side-2', a: 'palm-front-top-right', b: 'thumb-back-base', c: 'palm-back-top-right' },
    { id: 'thumb-mid-front-1', a: 'palm-front-middle', b: 'thumb-front-mid-left', c: 'thumb-front-mid-right' },
    { id: 'thumb-mid-front-2', a: 'palm-front-middle', b: 'thumb-front-mid-right', c: 'thumb-front-base' },
    { id: 'thumb-tip-front-1', a: 'thumb-front-mid-left', b: 'thumb-front-tip-left', c: 'thumb-front-tip-right' },
    { id: 'thumb-tip-front-2', a: 'thumb-front-mid-left', b: 'thumb-front-tip-right', c: 'thumb-front-mid-right' },
    { id: 'thumb-mid-back-1', b: 'palm-back-middle', a: 'thumb-back-mid-left', c: 'thumb-back-mid-right' },
    { id: 'thumb-mid-back-2', b: 'palm-back-middle', a: 'thumb-back-mid-right', c: 'thumb-back-base' },
    { id: 'thumb-tip-back-1', b: 'thumb-back-mid-left', a: 'thumb-back-tip-left', c: 'thumb-back-tip-right' },
    { id: 'thumb-tip-back-2', b: 'thumb-back-mid-left', a: 'thumb-back-tip-right', c: 'thumb-back-mid-right' },
    { id: 'thumb-left-1', a: 'palm-back-middle', b: 'thumb-back-mid-left', c: 'thumb-front-mid-left' },
    { id: 'thumb-left-2', a: 'palm-back-middle', b: 'thumb-front-mid-left', c: 'palm-front-middle' },
    { id: 'thumb-left-3', a: 'thumb-back-mid-left', b: 'thumb-back-tip-left', c: 'thumb-front-tip-left' },
    { id: 'thumb-left-4', a: 'thumb-back-mid-left', b: 'thumb-front-tip-left', c: 'thumb-front-mid-left' },
    { id: 'thumb-right-1', b: 'thumb-back-base', a: 'thumb-back-mid-right', c: 'thumb-front-mid-right' },
    { id: 'thumb-right-2', b: 'thumb-back-base', a: 'thumb-front-mid-right', c: 'thumb-front-base' },
    { id: 'thumb-right-3', b: 'thumb-back-mid-right', a: 'thumb-back-tip-right', c: 'thumb-front-tip-right' },
    { id: 'thumb-right-4', b: 'thumb-back-mid-right', a: 'thumb-front-tip-right', c: 'thumb-front-mid-right' },
    { id: 'thumb-cap-1', a: 'thumb-front-tip-left', b: 'thumb-back-tip-left', c: 'thumb-back-tip-right' },
    { id: 'thumb-cap-2', a: 'thumb-front-tip-left', b: 'thumb-back-tip-right', c: 'thumb-front-tip-right' },
    { id: 'index-front-1', a: 'palm-front-bottom-right-mid', b: 'index-front-base-left', c: 'index-front-base-right' },
    { id: 'index-front-2', a: 'palm-front-bottom-right-mid', b: 'index-front-base-right', c: 'palm-front-bottom-right' },
    { id: 'index-front-3', a: 'index-front-base-left', b: 'index-front-mid-left', c: 'index-front-mid-right' },
    { id: 'index-front-4', a: 'index-front-base-left', b: 'index-front-mid-right', c: 'index-front-base-right' },
    { id: 'index-front-5', a: 'index-front-mid-left', b: 'index-front-tip-left', c: 'index-front-tip-right' },
    { id: 'index-front-6', a: 'index-front-mid-left', b: 'index-front-tip-right', c: 'index-front-mid-right' },
    { id: 'index-back-1', b: 'palm-back-bottom-right-mid', a: 'index-back-base-left', c: 'index-back-base-right' },
    { id: 'index-back-2', b: 'palm-back-bottom-right-mid', a: 'index-back-base-right', c: 'palm-back-bottom-right' },
    { id: 'index-back-3', b: 'index-back-base-left', a: 'index-back-mid-left', c: 'index-back-mid-right' },
    { id: 'index-back-4', b: 'index-back-base-left', a: 'index-back-mid-right', c: 'index-back-base-right' },
    { id: 'index-back-5', b: 'index-back-mid-left', a: 'index-back-tip-left', c: 'index-back-tip-right' },
    { id: 'index-back-6', b: 'index-back-mid-left', a: 'index-back-tip-right', c: 'index-back-mid-right' },
    { id: 'index-left-1', a: 'palm-back-bottom-right-mid', b: 'index-back-base-left', c: 'index-front-base-left' },
    { id: 'index-left-2', a: 'palm-back-bottom-right-mid', b: 'index-front-base-left', c: 'palm-front-bottom-right-mid' },
    { id: 'index-left-3', a: 'index-back-base-left', b: 'index-back-mid-left', c: 'index-front-mid-left' },
    { id: 'index-left-4', a: 'index-back-base-left', b: 'index-front-mid-left', c: 'index-front-base-left' },
    { id: 'index-left-5', a: 'index-back-mid-left', b: 'index-back-tip-left', c: 'index-front-tip-left' },
    { id: 'index-left-6', a: 'index-back-mid-left', b: 'index-front-tip-left', c: 'index-front-mid-left' },
    { id: 'index-right-1', b: 'palm-back-bottom-right', a: 'index-back-base-right', c: 'index-front-base-right' },
    { id: 'index-right-2', b: 'palm-back-bottom-right', a: 'index-front-base-right', c: 'palm-front-bottom-right' },
    { id: 'index-right-3', b: 'index-back-base-right', a: 'index-back-mid-right', c: 'index-front-mid-right' },
    { id: 'index-right-4', b: 'index-back-base-right', a: 'index-front-mid-right', c: 'index-front-base-right' },
    { id: 'index-right-5', b: 'index-back-mid-right', a: 'index-back-tip-right', c: 'index-front-tip-right' },
    { id: 'index-right-6', b: 'index-back-mid-right', a: 'index-front-tip-right', c: 'index-front-mid-right' },
    { id: 'index-cap-1', a: 'index-front-tip-left', b: 'index-back-tip-left', c: 'index-back-tip-right' },
    { id: 'index-cap-2', a: 'index-front-tip-left', b: 'index-back-tip-right', c: 'index-front-tip-right' },
    { id: 'middle-front-1', a: 'palm-front-bottom-center', b: 'middle-front-base-left', c: 'middle-front-base-right' },
    { id: 'middle-front-2', a: 'palm-front-bottom-center', b: 'middle-front-base-right', c: 'palm-front-bottom-right-mid' },
    { id: 'middle-front-3', a: 'middle-front-base-left', b: 'middle-front-mid-left', c: 'middle-front-mid-right' },
    { id: 'middle-front-4', a: 'middle-front-base-left', b: 'middle-front-mid-right', c: 'middle-front-base-right' },
    { id: 'middle-front-5', a: 'middle-front-mid-left', b: 'middle-front-tip-left', c: 'middle-front-tip-right' },
    { id: 'middle-front-6', a: 'middle-front-mid-left', b: 'middle-front-tip-right', c: 'middle-front-mid-right' },
    { id: 'middle-back-1', b: 'palm-back-bottom-center', a: 'middle-back-base-left', c: 'middle-back-base-right' },
    { id: 'middle-back-2', b: 'palm-back-bottom-center', a: 'middle-back-base-right', c: 'palm-back-bottom-right-mid' },
    { id: 'middle-back-3', b: 'middle-back-base-left', a: 'middle-back-mid-left', c: 'middle-back-mid-right' },
    { id: 'middle-back-4', b: 'middle-back-base-left', a: 'middle-back-mid-right', c: 'middle-back-base-right' },
    { id: 'middle-back-5', b: 'middle-back-mid-left', a: 'middle-back-tip-left', c: 'middle-back-tip-right' },
    { id: 'middle-back-6', b: 'middle-back-mid-left', a: 'middle-back-tip-right', c: 'middle-back-mid-right' },
    { id: 'middle-left-1', a: 'palm-back-bottom-center', b: 'middle-back-base-left', c: 'middle-front-base-left' },
    { id: 'middle-left-2', a: 'palm-back-bottom-center', b: 'middle-front-base-left', c: 'palm-front-bottom-center' },
    { id: 'middle-left-3', a: 'middle-back-base-left', b: 'middle-back-mid-left', c: 'middle-front-mid-left' },
    { id: 'middle-left-4', a: 'middle-back-base-left', b: 'middle-front-mid-left', c: 'middle-front-base-left' },
    { id: 'middle-left-5', a: 'middle-back-mid-left', b: 'middle-back-tip-left', c: 'middle-front-tip-left' },
    { id: 'middle-left-6', a: 'middle-back-mid-left', b: 'middle-front-tip-left', c: 'middle-front-mid-left' },
    { id: 'middle-right-1', b: 'palm-back-bottom-right-mid', a: 'middle-back-base-right', c: 'middle-front-base-right' },
    { id: 'middle-right-2', b: 'palm-back-bottom-right-mid', a: 'middle-front-base-right', c: 'palm-front-bottom-right-mid' },
    { id: 'middle-right-3', b: 'middle-back-base-right', a: 'middle-back-mid-right', c: 'middle-front-mid-right' },
    { id: 'middle-right-4', b: 'middle-back-base-right', a: 'middle-front-mid-right', c: 'middle-front-base-right' },
    { id: 'middle-right-5', b: 'middle-back-mid-right', a: 'middle-back-tip-right', c: 'middle-front-tip-right' },
    { id: 'middle-right-6', b: 'middle-back-mid-right', a: 'middle-front-tip-right', c: 'middle-front-mid-right' },
    { id: 'middle-cap-1', a: 'middle-front-tip-left', b: 'middle-back-tip-left', c: 'middle-back-tip-right' },
    { id: 'middle-cap-2', a: 'middle-front-tip-left', b: 'middle-back-tip-right', c: 'middle-front-tip-right' },
    { id: 'ring-front-1', a: 'palm-front-bottom-left-mid', b: 'ring-front-base-left', c: 'ring-front-base-right' },
    { id: 'ring-front-2', a: 'palm-front-bottom-left-mid', b: 'ring-front-base-right', c: 'palm-front-bottom-center' },
    { id: 'ring-front-3', a: 'ring-front-base-left', b: 'ring-front-mid-left', c: 'ring-front-mid-right' },
    { id: 'ring-front-4', a: 'ring-front-base-left', b: 'ring-front-mid-right', c: 'ring-front-base-right' },
    { id: 'ring-front-5', a: 'ring-front-mid-left', b: 'ring-front-tip-left', c: 'ring-front-tip-right' },
    { id: 'ring-front-6', a: 'ring-front-mid-left', b: 'ring-front-tip-right', c: 'ring-front-mid-right' },
    { id: 'ring-back-1', b: 'palm-back-bottom-left-mid', a: 'ring-back-base-left', c: 'ring-back-base-right' },
    { id: 'ring-back-2', b: 'palm-back-bottom-left-mid', a: 'ring-back-base-right', c: 'palm-back-bottom-center' },
    { id: 'ring-back-3', b: 'ring-back-base-left', a: 'ring-back-mid-left', c: 'ring-back-mid-right' },
    { id: 'ring-back-4', b: 'ring-back-base-left', a: 'ring-back-mid-right', c: 'ring-back-base-right' },
    { id: 'ring-back-5', b: 'ring-back-mid-left', a: 'ring-back-tip-left', c: 'ring-back-tip-right' },
    { id: 'ring-back-6', b: 'ring-back-mid-left', a: 'ring-back-tip-right', c: 'ring-back-mid-right' },
    { id: 'ring-left-1', a: 'palm-back-bottom-left-mid', b: 'ring-back-base-left', c: 'ring-front-base-left' },
    { id: 'ring-left-2', a: 'palm-back-bottom-left-mid', b: 'ring-front-base-left', c: 'palm-front-bottom-left-mid' },
    { id: 'ring-left-3', a: 'ring-back-base-left', b: 'ring-back-mid-left', c: 'ring-front-mid-left' },
    { id: 'ring-left-4', a: 'ring-back-base-left', b: 'ring-front-mid-left', c: 'ring-front-base-left' },
    { id: 'ring-left-5', a: 'ring-back-mid-left', b: 'ring-back-tip-left', c: 'ring-front-tip-left' },
    { id: 'ring-left-6', a: 'ring-back-mid-left', b: 'ring-front-tip-left', c: 'ring-front-mid-left' },
    { id: 'ring-right-1', b: 'palm-back-bottom-center', a: 'ring-back-base-right', c: 'ring-front-base-right' },
    { id: 'ring-right-2', b: 'palm-back-bottom-center', a: 'ring-front-base-right', c: 'palm-front-bottom-center' },
    { id: 'ring-right-3', b: 'ring-back-base-right', a: 'ring-back-mid-right', c: 'ring-front-mid-right' },
    { id: 'ring-right-4', b: 'ring-back-base-right', a: 'ring-front-mid-right', c: 'ring-front-base-right' },
    { id: 'ring-right-5', b: 'ring-back-mid-right', a: 'ring-back-tip-right', c: 'ring-front-tip-right' },
    { id: 'ring-right-6', b: 'ring-back-mid-right', a: 'ring-front-tip-right', c: 'ring-front-mid-right' },
    { id: 'ring-cap-1', a: 'ring-front-tip-left', b: 'ring-back-tip-left', c: 'ring-back-tip-right' },
    { id: 'ring-cap-2', a: 'ring-front-tip-left', b: 'ring-back-tip-right', c: 'ring-front-tip-right' },
    { id: 'pinky-front-1', a: 'palm-front-bottom-left', b: 'pinky-front-base-left', c: 'pinky-front-base-right' },
    { id: 'pinky-front-2', a: 'palm-front-bottom-left', b: 'pinky-front-base-right', c: 'palm-front-bottom-left-mid' },
    { id: 'pinky-front-3', a: 'pinky-front-base-left', b: 'pinky-front-mid-left', c: 'pinky-front-mid-right' },
    { id: 'pinky-front-4', a: 'pinky-front-base-left', b: 'pinky-front-mid-right', c: 'pinky-front-base-right' },
    { id: 'pinky-front-5', a: 'pinky-front-mid-left', b: 'pinky-front-tip-left', c: 'pinky-front-tip-right' },
    { id: 'pinky-front-6', a: 'pinky-front-mid-left', b: 'pinky-front-tip-right', c: 'pinky-front-mid-right' },
    { id: 'pinky-back-1', b: 'palm-back-bottom-left', a: 'pinky-back-base-left', c: 'pinky-back-base-right' },
    { id: 'pinky-back-2', b: 'palm-back-bottom-left', a: 'pinky-back-base-right', c: 'palm-back-bottom-left-mid' },
    { id: 'pinky-back-3', b: 'pinky-back-base-left', a: 'pinky-back-mid-left', c: 'pinky-back-mid-right' },
    { id: 'pinky-back-4', b: 'pinky-back-base-left', a: 'pinky-back-mid-right', c: 'pinky-back-base-right' },
    { id: 'pinky-back-5', b: 'pinky-back-mid-left', a: 'pinky-back-tip-left', c: 'pinky-back-tip-right' },
    { id: 'pinky-back-6', b: 'pinky-back-mid-left', a: 'pinky-back-tip-right', c: 'pinky-back-mid-right' },
    { id: 'pinky-left-1', a: 'palm-back-bottom-left', b: 'pinky-back-base-left', c: 'pinky-front-base-left' },
    { id: 'pinky-left-2', a: 'palm-back-bottom-left', b: 'pinky-front-base-left', c: 'palm-front-bottom-left' },
    { id: 'pinky-left-3', a: 'pinky-back-base-left', b: 'pinky-back-mid-left', c: 'pinky-front-mid-left' },
    { id: 'pinky-left-4', a: 'pinky-back-base-left', b: 'pinky-front-mid-left', c: 'pinky-front-base-left' },
    { id: 'pinky-left-5', a: 'pinky-back-mid-left', b: 'pinky-back-tip-left', c: 'pinky-front-tip-left' },
    { id: 'pinky-left-6', a: 'pinky-back-mid-left', b: 'pinky-front-tip-left', c: 'pinky-front-mid-left' },
    { id: 'pinky-right-1', b: 'palm-back-bottom-left-mid', a: 'pinky-back-base-right', c: 'pinky-front-base-right' },
    { id: 'pinky-right-2', b: 'palm-back-bottom-left-mid', a: 'pinky-front-base-right', c: 'palm-front-bottom-left-mid' },
    { id: 'pinky-right-3', b: 'pinky-back-base-right', a: 'pinky-back-mid-right', c: 'pinky-front-mid-right' },
    { id: 'pinky-right-4', b: 'pinky-back-base-right', a: 'pinky-front-mid-right', c: 'pinky-front-base-right' },
    { id: 'pinky-right-5', b: 'pinky-back-mid-right', a: 'pinky-back-tip-right', c: 'pinky-front-tip-right' },
    { id: 'pinky-right-6', b: 'pinky-back-mid-right', a: 'pinky-front-tip-right', c: 'pinky-front-mid-right' },
    { id: 'pinky-cap-1', a: 'pinky-front-tip-left', b: 'pinky-back-tip-left', c: 'pinky-back-tip-right' },
    { id: 'pinky-cap-2', a: 'pinky-front-tip-left', b: 'pinky-back-tip-right', c: 'pinky-front-tip-right' }
  ]
};
