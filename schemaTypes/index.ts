import {type SchemaTypeDefinition} from 'sanity'

import {projectType} from './projectType'
import {articleType} from './articleType'
import {graphicDesignType} from './graphicDesignType'
import {serviceType} from './serviceType'
import {tagType} from './tagType'
import {aboutType} from './aboutType'
import {testimonialType} from './testimonialType'
import {inquiryType} from './inquiryType'
import {invoiceType} from './invoiceType'

export const schemaTypes: {types: SchemaTypeDefinition[]} = {
  types: [
    projectType,
    aboutType,
    serviceType,
    tagType,
    articleType,
    graphicDesignType,
    testimonialType,
    inquiryType,
    invoiceType,
  ],
}
