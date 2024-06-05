export interface Asset {
  id: number,
  alt: string
  name: string
  focus: string
  filename: string
  copyright: string
  fieldtype: string
  meta_data: {
    alt: string
    title: string
    source: string
    copyright: string
  }
  is_private: boolean
}