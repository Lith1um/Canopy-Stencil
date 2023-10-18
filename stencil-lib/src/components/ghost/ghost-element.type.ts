export type GhostAnimation = 'horizontal';

export type GhostElementType = '';

export interface GhostElement {

  type: GhostElementType;
  size?: number
  children?: GhostElement[];

}

const ghosts = [
  {
    type: 'flex',
    children: [
      {
        type: 'box',
        size: '2rem'
      }
    ]
  }
];
