type TextType = 'doc' | 'paragraph' | 'text';

export interface RichText {
  type: TextType
  text?: string
  content?: RichText[]
  marks?: { [key: string]: any }[]
}
