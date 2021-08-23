export enum Colors {
  valid = 'valid',
  invalid = 'invalid',
  default = 'default',
}

export interface ActiveTitle {
  [key: number]: boolean
}

export enum Limits {
  right = 3,
  left = 0,
}

export type Orientation =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'diagonal'
  | 'itself'


export type Axis = 'vertical' | 'horizontal' | 'diagonal'

export interface OrientationTypes {
  [type: string]: number
}
export interface NewOrientationTypes {
  type: string
  value: number
  func: (type: Axis, subtype: Orientation) => boolean
}

export type mapOrientationFunc = NewOrientationTypes[]
export interface useTableGameProps {
  board: string[]
}
