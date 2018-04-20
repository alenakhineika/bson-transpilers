module.exports="SymbolTypes:\n    VAR: &var 0\n    CONSTRUCTOR: &constructor 1\n    FUNC: &func 2\n# Internal patterns to save typing\n__type: &__type\n    id: null\n    callable: *var\n    args: null\n    type: null\n    attr: {}\n    template: null\n    argsTemplate: null\n__func: &__func\n    callable: *func\n    args: []\n    attr: {}\n    template: null\n    argsTemplate: null\n\n# Java Templates\nTemplates:\n    # BSON Object Type templates\n    CodeTypeTemplate: &CodeTypeTemplate null\n    StringTypeTemplate: &StringTypeTemplate null\n    RegexTypeTemplate: &RegexTypeTemplate null\n    BoolTypeTemplate: &BoolTypeTemplate null\n    IntegerTypeTemplate: &IntegerTypeTemplate null\n    DecimalTypeTemplate: &DecimalTypeTemplate null\n    HexTypeTemplate: &HexTypeTemplate null\n    OctalTypeTemplate: &OctalTypeTemplate null\n    NumericTypeTemplate: &NumericTypeTemplate null\n    ArrayTypeTemplate: &ArrayTypeTemplate null\n    NullTypeTemplate: &NullTypeTemplate null\n    UndefinedTypeTemplate: &UndefinedTypeTemplate null\n    ObjectTypeTemplate: &ObjectTypeTemplate null\n    ObjectTypeArgsTemplate: &ObjectTypeArgsTemplate null\n    # BSON Object Method templates\n    ObjectIdToJSONTemplate: &ObjectIdToJSONTemplate null\n    BinaryValueTemplate: &BinaryValueTemplate null\n    BinaryToJSONTemplate: &BinaryToJSONTemplate null\n    DoubleToJSONTemplate: &DoubleToJSONTemplate null\n    DoubleValueOfTemplate: &DoubleValueOfTemplate null\n    Int32ToJSONTemplate: &Int32ToJSONTemplate null\n    Int32ValueOfTemplate: &Int32ValueOfTemplate null\n    LongToJSONTemplate: &LongToJSONTemplate null\n    LongToIntTemplate: &LongToIntTemplate null\n    LongToNumberTemplate: &LongToNumberTemplate null\n    LongAddTemplate: &LongAddTemplate null\n    LongAddArgsTemplate: &LongAddArgsTemplate null\n    LongSubtractTemplate: &LongSubtractTemplate null\n    LongSubtractArgsTemplate: &LongSubtractArgsTemplate null\n    LongMultiplyTemplate: &LongMultiplyTemplate null\n    LongMultiplyArgsTemplate: &LongMultiplyArgsTemplate null\n    LongDivTemplate: &LongDivTemplate null\n    LongDivArgsTemplate: &LongDivArgsTemplate null\n    LongModuloTemplate: &LongModuloTemplate null\n    LongModuloArgsTemplate: &LongModuloArgsTemplate null\n    LongAndTemplate: &LongAndTemplate null\n    LongAndArgsTemplate: &LongAndArgsTemplate null\n    LongOrTemplate: &LongOrTemplate null\n    LongOrArgsTemplate: &LongOrArgsTemplate null\n    LongXorTemplate: &LongXorTemplate null\n    LongXorArgsTemplate: &LongXorArgsTemplate null\n    LongShiftLeftTemplate: &LongShiftLeftTemplate null\n    LongShiftLeftArgsTemplate: &LongShiftLeftArgsTemplate null\n    LongShiftRightTemplate: &LongShiftRightTemplate null\n    LongShiftRightArgsTemplate: &LongShiftRightArgsTemplate null\n    LongCompareTemplate: &LongCompareTemplate null\n    LongIsOddTemplate: &LongIsOddTemplate null\n    LongIsOddArgsTemplate: &LongIsOddArgsTemplate null\n    LongIsZeroTemplate: &LongIsZeroTemplate null\n    LongIsZeroArgsTemplate: &LongIsZeroArgsTemplate null\n    LongIsNegativeTemplate: &LongIsNegativeTemplate null\n    LongIsNegativeArgsTemplate: &LongIsNegativeArgsTemplate null\n    LongNegateTemplate: &LongNegateTemplate null\n    LongNegateArgsTemplate: &LongNegateArgsTemplate null\n    LongNotTemplate: &LongNotTemplate null\n    LongNotArgsTemplate: &LongNotArgsTemplate null\n    LongNotEqualsTemplate: &LongNotEqualsTemplate null\n    LongNotEqualsArgsTemplate: &LongNotEqualsArgsTemplate null\n    LongGreaterThanTemplate: &LongGreaterThanTemplate null\n    LongGreaterThanArgsTemplate: &LongGreaterThanArgsTemplate null\n    LongGreaterThanOrEqualTemplate: &LongGreaterThanOrEqualTemplate null\n    LongGreaterThanOrEqualArgsTemplate: &LongGreaterThanOrEqualArgsTemplate null\n    LongLessThanTemplate: &LongLessThanTemplate null\n    LongLessThanArgsTemplate: &LongLessThanArgsTemplate null\n    LongLessThanOrEqualTemplate: &LongLessThanOrEqualTemplate null\n    LongLessThanOrEqualArgsTemplate: &LongLessThanOrEqualArgsTemplate null\n    TimestampGetLowBitsTemplate: &TimestampGetLowBitsTemplate null\n    TimestampGetHighBitsTemplate: &TimestampGetHighBitsTemplate null\n    TimestampToJSONTemplate: &TimestampToJSONTemplate null\n    TimestampCompareTemplate: &TimestampCompareTemplate null\n    TimestampNotEqualsTemplate: &TimestampNotEqualsTemplate null\n    TimestampNotEqualsArgsTemplate: &TimestampNotEqualsArgsTemplate null\n    TimestampGreaterThanTemplate: &TimestampGreaterThanTemplate null\n    TimestampGreaterThanArgsTemplate: &TimestampGreaterThanArgsTemplate null\n    TimestampGreaterThanOrEqualTemplate: &TimestampGreaterThanOrEqualTemplate null\n    TimestampGreaterThanOrEqualArgsTemplate: &TimestampGreaterThanOrEqualArgsTemplate null\n    TimestampLessThanTemplate: &TimestampLessThanTemplate null\n    TimestampLessThanArgsTemplate: &TimestampLessThanArgsTemplate null\n    TimestampLessThanOrEqualTemplate: &TimestampLessThanOrEqualTemplate null\n    TimestampLessThanOrEqualArgsTemplate: &TimestampLessThanOrEqualArgsTemplate null\n    SymbolValueOfTemplate: &SymbolValueOfTemplate null\n    SymbolInspectTemplate: &SymbolInspectTemplate null\n    SymbolToJSONTemplate: &SymbolToJSONTemplate null\n    SymbolToStringTemplate: &SymbolToStringTemplate null\n    # Symbol Templates\n    CodeSymbolTemplate: &CodeSymbolTemplate null # Has emit method\n    CodeSymbolArgsTemplate: &CodeSymbolArgsTemplate null\n    ObjectIdSymbolTemplate: &ObjectIdSymbolTemplate null # Has emit method\n    ObjectIdSymbolArgsTemplate: &ObjectIdSymbolArgsTemplate null\n    BinarySymbolTemplate: &BinarySymbolTemplate null # Has emit method\n    BinarySymbolArgsTemplate: &BinarySymbolArgsTemplate null\n    BinarySymbolSubtypeDefaultTemplate: &BinarySymbolSubtypeDefaultTemplate null\n    BinarySymbolSubtypeFunctionTemplate: &BinarySymbolSubtypeFunctionTemplate null\n    BinarySymbolSubtypeByteArrayTemplate: &BinarySymbolSubtypeByteArrayTemplate null\n    BinarySymbolSubtypeUuidOldTemplate: &BinarySymbolSubtypeUuidOldTemplate null\n    BinarySymbolSubtypeUuidTemplate: &BinarySymbolSubtypeUuidTemplate null\n    BinarySymbolSubtypeMd5Template: &BinarySymbolSubtypeMd5Template null\n    BinarySymbolSubtypeUserDefinedTemplate: &BinarySymbolSubtypeUserDefinedTemplate null\n    DBRefSymbolTemplate: &DBRefSymbolTemplate null\n    DBRefSymbolArgsTemplate: &DBRefSymbolArgsTemplate null\n    DoubleSymbolTemplate: &DoubleSymbolTemplate null\n    DoubleSymbolArgsTemplate: &DoubleSymbolArgsTemplate null\n    Int32SymbolTemplate: &Int32SymbolTemplate null\n    Int32SymbolArgsTemplate: &Int32SymbolArgsTemplate null\n    LongSymbolTemplate: &LongSymbolTemplate null\n    LongSymbolArgsTemplate: &LongSymbolArgsTemplate null # Has emit method\n    LongSymbolMaxTemplate: &LongSymbolMaxTemplate null\n    LongSymbolMaxArgsTemplate: &LongSymbolMaxArgsTemplate null\n    LongSymbolMinTemplate: &LongSymbolMinTemplate null\n    LongSymbolMinArgsTemplate: &LongSymbolMinArgsTemplate null\n    LongSymbolZeroTemplate: &LongSymbolZeroTemplate null\n    LongSymbolZeroArgsTemplate: &LongSymbolZeroArgsTemplate null\n    LongSymbolOneTemplate: &LongSymbolOneTemplate null\n    LongSymbolOneArgsTemplate: &LongSymbolOneArgsTemplate null\n    LongSymbolNegOneTemplate: &LongSymbolNegOneTemplate null\n    LongSymbolNegOneArgsTemplate: &LongSymbolNegOneArgsTemplate null\n    LongSymbolFromBitsTemplate: &LongSymbolFromBitsTemplate null\n    LongSymbolFromBitsArgsTemplate: &LongSymbolFromBitsArgsTemplate null\n    LongSymbolFromIntTemplate: &LongSymbolFromIntTemplate null\n    LongSymbolFromIntArgsTemplate: &LongSymbolFromIntArgsTemplate null\n    LongSymbolFromNumberTemplate: &LongSymbolFromNumberTemplate null\n    LongSymbolFromNumberArgsTemplate: &LongSymbolFromNumberArgsTemplate null\n    LongSymbolFromStringTemplate: &LongSymbolFromStringTemplate null\n    LongSymbolFromStringArgsTemplate: &LongSymbolFromStringArgsTemplate null\n    MinKeySymbolTemplate: &MinKeySymbolTemplate null\n    MinKeySymbolArgsTemplate: &MinKeySymbolArgsTemplate null\n    MaxKeySymbolTemplate: &MaxKeySymbolTemplate null\n    MaxKeySymbolArgsTemplate: &MaxKeySymbolArgsTemplate null\n    TimestampSymbolTemplate: &TimestampSymbolTemplate null\n    TimestampSymbolArgsTemplate: &TimestampSymbolArgsTemplate null\n    SymbolSymbolTemplate: &SymbolSymbolTemplate null\n    SymbolSymbolArgsTemplate: &SymbolSymbolArgsTemplate null\n    BSONRegExpSymbolTemplate: &BSONRegExpSymbolTemplate null # Has emit method\n    BSONRegExpSymbolArgsTemplate: &BSONRegExpSymbolArgsTemplate null\n    Decimal128SymbolTemplate: &Decimal128SymbolTemplate null # Has emit method\n    Decimal128SymbolArgsTemplate: &Decimal128SymbolArgsTemplate null\n    Decimal128SymbolFromStringTemplate: &Decimal128SymbolFromStringTemplate null\n    Decimal128SymbolFromStringArgsTemplate: &Decimal128SymbolFromStringArgsTemplate null\n    # BSON Util Templates\n    ObjectIdCreateFromHexStringTemplate: &ObjectIdCreateFromHexStringTemplate null\n    ObjectIdCreateFromHexStringArgsTemplate: &ObjectIdCreateFromHexStringArgsTemplate null\n    ObjectIdCreateFromTimeTemplate: &ObjectIdCreateFromTimeTemplate null\n    ObjectIdCreateFromTimeArgsTemplate: &ObjectIdCreateFromTimeArgsTemplate null\n    # JS Symbol Templates\n    ObjectSymbolTemplate: &ObjectSymbolTemplate null\n    ObjectSymbolArgsTemplate: &ObjectSymbolArgsTemplate null\n    ObjectSymbolCreateTemplate: &ObjectSymbolCreateTemplate null\n    ObjectSymbolCreateArgsTemplate: &ObjectSymbolCreateArgsTemplate null\n    NumberSymbolTemplate: &NumberSymbolTemplate null\n    NumberSymbolArgsTemplate: &NumberSymbolArgsTemplate null\n    DateSymbolTemplate: &DateSymbolTemplate null\n    DateSymbolArgsTemplate: &DateSymbolArgsTemplate null\n    DateSymbolNowTemplate: &DateSymbolNowTemplate null\n    DateSymbolNowArgsTemplate: &DateSymbolNowArgsTemplate null\n    RegExpSymbolTemplate: &RegExpSymbolTemplate null\n    RegExpSymbolArgsTemplate: &RegExpSymbolArgsTemplate null\n# Universal types\n# Everything inherits from StringType because we haven't implemented any of them.\nBasicTypes:\n    # Universal basic types\n    _string: &StringType\n        <<: *__type\n        id: \"_string\"\n        template: *StringTypeTemplate\n    _regex: &RegexType\n        <<: *__type\n        id: \"_regex\"\n        template: *RegexTypeTemplate\n    _bool: &BoolType\n        <<: *__type\n        id: \"_bool\"\n        template: *BoolTypeTemplate\n    _integer: &IntegerType\n        <<: *__type\n        id: \"_integer\"\n        template: *IntegerTypeTemplate\n    _decimal: &DecimalType\n        <<: *__type\n        id: \"_decimal\"\n        template: *DecimalTypeTemplate\n    _hex: &HexType\n        <<: *__type\n        id: \"_hex\"\n        template: *HexTypeTemplate\n    _octal: &OctalType\n        <<: *__type\n        id: \"_octal\"\n        template: *OctalTypeTemplate\n    _numeric: &NumericType\n        <<: *__type\n        id: \"_numeric\"\n        template: *NumericTypeTemplate\n    _array: &ArrayType\n        <<: *__type\n        id: \"_array\"\n        template: *ArrayTypeTemplate\n    _object: &ObjectType\n        <<: *__type\n        id: \"_object\"\n        template: *ObjectTypeTemplate\n        argsTemplate: *ObjectTypeArgsTemplate\n    _null: &NullType\n        <<: *__type\n        id: \"_null\"\n        template: *NullTypeTemplate\n    _undefined: &UndefinedType\n        <<: *__type\n        id: \"_undefined\"\n        template: *UndefinedTypeTemplate\n\nBsonTypes:\n    Code: &CodeType\n        <<: *__type\n        id: \"Code\"\n        type: *ObjectType\n        attr: {}\n        template: *CodeTypeTemplate\n    ObjectId: &ObjectIdType\n        <<: *__type\n        id: \"ObjectId\"\n        type: *ObjectType\n        attr:\n            toHexString:\n                <<: *__func\n                id: \"toHexString\"\n                type: *StringType\n            toString:\n                <<: *__func\n                type: *StringType\n            toJSON:\n                <<: *__func\n                type: *StringType\n                template: *ObjectIdToJSONTemplate\n            equals:\n                <<: *__func\n                args:\n                    - [ \"ObjectId\" ]\n                type: *BoolType\n            getTimestamp:\n                <<: *__func\n                type: *IntegerType\n    Binary: &BinaryType\n        <<: *__type\n        id: \"Binary\"\n        type: *ObjectType\n        attr:\n            value:\n                <<: *__func\n                id: \"value\"\n                type: *StringType\n                template: *BinaryValueTemplate\n            length:\n                <<: *__func\n                id: \"length\"\n                type: *IntegerType\n            toString:\n                <<: *__func\n                id: \"toString\"\n                type: *StringType\n            toJSON:\n                <<: *__func\n                id: \"toJSON\"\n                type: *StringType\n                template: *BinaryToJSONTemplate\n    DBRef: &DBRefType\n        <<: *__type\n        id: \"DBRef\"\n        type: *ObjectType\n        attr:\n            toJSON:\n                <<: *__func\n                id: \"DBReftoJSON\" # Needs emit method\n                type: *ObjectType\n    Double: &DoubleType\n        <<: *__type\n        id: \"Double\"\n        type: *ObjectType\n        attr:\n            valueOf:\n                <<: *__func\n                id: \"valueOf\"\n                type: *IntegerType\n                template: *DoubleValueOfTemplate\n            toJSON:\n                <<: *__func\n                id: \"toJSON\"\n                type: *IntegerType\n                template: *DoubleToJSONTemplate\n    Int32: &Int32Type\n        <<: *__type\n        id: \"Int32\"\n        type: *ObjectType\n        attr:\n            valueOf:\n                <<: *__func\n                id: \"valueOf\"\n                type: *Int32Type\n                template: *Int32ValueOfTemplate\n            toJSON:\n                <<: *__func\n                id: \"toJSON\"\n                type: *Int32Type\n                template: *Int32ToJSONTemplate\n    Long: &LongType\n        <<: *__type\n        id: \"Long\"\n        type: *ObjectType\n        attr:\n            toString:\n                <<: *__func\n                id: \"LongtoString\" # Needs emit method\n                args:\n                    - [ *IntegerType, null ]\n                type: *StringType\n            equals:\n                <<: *__func\n                id: \"equals\"\n                args:\n                    - [ \"Long\" ]\n                type: *BoolType\n            toJSON:\n                <<: *__func\n                id: \"toJSON\"\n                type: *StringType\n                template: *LongToJSONTemplate\n            toInt:\n                <<: *__func\n                id: \"toInt\"\n                type: *IntegerType\n                template: *LongToIntTemplate\n            toNumber:\n                <<: *__func\n                id: \"toNumber\"\n                type: *DecimalType\n                template: *LongToNumberTemplate\n            compare:\n                <<: *__func\n                id: \"compare\"\n                args:\n                    - [ \"Long\" ]\n                type: *StringType\n                template: *LongCompareTemplate\n            isOdd:\n                <<: *__func\n                id: \"isOdd\"\n                type: *BoolType\n                template: *LongIsOddTemplate\n                argsTemplate: *LongIsOddArgsTemplate\n            isZero:\n                <<: *__func\n                id: \"isZero\"\n                type: *BoolType\n                template: *LongIsZeroTemplate\n                argsTemplate: *LongIsZeroArgsTemplate\n            isNegative:\n                <<: *__func\n                id: \"isNegative\"\n                type: *BoolType\n                template: *LongIsNegativeTemplate\n                argsTemplate: *LongIsNegativeArgsTemplate\n            negate:\n                <<: *__func\n                id: \"negate\"\n                type: \"Long\"\n                template: *LongNegateTemplate\n                argsTemplate: *LongNegateArgsTemplate\n            not:\n                <<: *__func\n                id: \"not\"\n                type: \"Long\"\n                template: *LongNotTemplate\n                argsTemplate: *LongNotArgsTemplate\n            notEquals:\n                <<: *__func\n                id: \"notEquals\"\n                args:\n                    - [ \"Long\" ]\n                type: *BoolType\n                template: *LongNotEqualsTemplate\n                argsTemplate: *LongNotEqualsArgsTemplate\n            greaterThan:\n                <<: *__func\n                id: \"greaterThan\"\n                args:\n                    - [ \"Long\" ]\n                type: *BoolType\n                template: *LongGreaterThanTemplate\n                argsTemplate: *LongGreaterThanArgsTemplate\n            greaterThanOrEqual:\n                <<: *__func\n                id: \"greaterThanOrEqual\"\n                args:\n                    - [ \"Long\" ]\n                type: *BoolType\n                template: *LongGreaterThanOrEqualTemplate\n                argsTemplate: *LongGreaterThanOrEqualArgsTemplate\n            lessThan:\n                <<: *__func\n                id: \"lessThan\"\n                args:\n                    - [ \"Long\" ]\n                type: *BoolType\n                template: *LongLessThanTemplate\n                argsTemplate: *LongLessThanArgsTemplate\n            lessThanOrEqual:\n                <<: *__func\n                id: \"lessThanOrEqual\"\n                args:\n                    - [ \"Long\" ]\n                type: *BoolType\n                template: *LongLessThanOrEqualTemplate\n                argsTemplate: *LongLessThanOrEqualArgsTemplate\n            add:\n                <<: *__func\n                id: \"add\"\n                args:\n                    - [ \"Long\" ]\n                type: \"Long\"\n                template: *LongAddTemplate\n                argsTemplate: *LongAddArgsTemplate\n            subtract:\n                <<: *__func\n                id: \"subtract\"\n                args:\n                    - [ \"Long\" ]\n                type: \"Long\"\n                template: *LongSubtractTemplate\n                argsTemplate: *LongSubtractArgsTemplate\n            multiply:\n                <<: *__func\n                id: \"multiply\"\n                args:\n                    - [ \"Long\" ]\n                type: \"Long\"\n                template: *LongMultiplyTemplate\n                argsTemplate: *LongMultiplyArgsTemplate\n            div:\n                <<: *__func\n                id: \"div\"\n                args:\n                    - [ \"Long\" ]\n                type: \"Long\"\n                template: *LongDivTemplate\n                argsTemplate: *LongDivArgsTemplate\n            modulo:\n                <<: *__func\n                id: \"modulo\"\n                args:\n                    - [ \"Long\" ]\n                type: \"Long\"\n                template: *LongModuloTemplate\n                argsTemplate: *LongModuloArgsTemplate\n            and:\n                <<: *__func\n                id: \"and\"\n                args:\n                    - [ \"Long\" ]\n                type: \"Long\"\n                template: *LongAndTemplate\n                argsTemplate: *LongAndArgsTemplate\n            or:\n                <<: *__func\n                id: \"or\"\n                args:\n                    - [ \"Long\" ]\n                type: \"Long\"\n                template: *LongOrTemplate\n                argsTemplate: *LongOrArgsTemplate\n            xor:\n                <<: *__func\n                id: \"xor\"\n                args:\n                    - [ \"Long\" ]\n                type: \"Long\"\n                template: *LongXorTemplate\n                argsTemplate: *LongXorArgsTemplate\n            shiftLeft:\n                <<: *__func\n                id: \"shiftLeft\"\n                args:\n                    - [ *IntegerType ]\n                type: \"Long\"\n                template: *LongShiftLeftTemplate\n                argsTemplate: *LongShiftLeftArgsTemplate\n            shiftRight:\n                <<: *__func\n                id: \"shiftRight\"\n                args:\n                    - [ *IntegerType ]\n                type: \"Long\"\n                template: *LongShiftRightTemplate\n                argsTemplate: *LongShiftRightArgsTemplate\n    MinKeyType: &MinKeyType\n        <<: *__type\n        id: \"MinKey\"\n        type: *ObjectType\n    MaxKeyType: &MaxKeyType\n        <<: *__type\n        id: \"MaxKey\"\n        type: *ObjectType\n    BSONRegExpType: &BSONRegExpType\n        <<: *__type\n        id: \"BSONRegExp\"\n        type: *ObjectType\n    Timestamp: &TimestampType\n        <<: *__type\n        id: \"Timestamp\"\n        type: *ObjectType\n        attr:\n            toString:\n                <<: *__func\n                id: \"toString\"\n                type: *StringType\n            equals:\n                <<: *__func\n                id: \"equals\"\n                args:\n                    - [ \"Timestamp\" ]\n                type: *BoolType\n            getLowBits:\n                <<: *__func\n                id: \"getLowBits\"\n                type: *IntegerType\n                template: *TimestampGetLowBitsTemplate\n            getHighBits:\n                <<: *__func\n                id: \"getHighBits\"\n                type: *IntegerType\n                template: *TimestampGetHighBitsTemplate\n            toJSON:\n                <<: *__func\n                id: \"toJSON\"\n                type: *StringType\n                template: *TimestampToJSONTemplate\n            compare:\n                <<: *__func\n                id: \"compare\"\n                args:\n                    - [ \"Timestamp\" ]\n                type: *StringType\n                template: *TimestampCompareTemplate\n            notEquals:\n                <<: *__func\n                id: \"notEquals\"\n                args:\n                    - [ \"Timestamp\" ]\n                type: *BoolType\n                template: *TimestampNotEqualsTemplate\n                argsTemplate: *TimestampNotEqualsArgsTemplate\n            greaterThan:\n                <<: *__func\n                id: \"greaterThan\"\n                args:\n                    - [ \"Timestamp\" ]\n                type: *BoolType\n                template: *TimestampGreaterThanTemplate\n                argsTemplate: *TimestampGreaterThanArgsTemplate\n            greaterThanOrEqual:\n                <<: *__func\n                id: \"greaterThanOrEqual\"\n                args:\n                    - [ \"Timestamp\" ]\n                type: *BoolType\n                template: *TimestampGreaterThanOrEqualTemplate\n                argsTemplate: *TimestampGreaterThanOrEqualArgsTemplate\n            lessThan:\n                <<: *__func\n                id: \"lessThan\"\n                args:\n                    - [ \"Timestamp\" ]\n                type: *BoolType\n                template: *TimestampLessThanTemplate\n                argsTemplate: *TimestampLessThanArgsTemplate\n            lessThanOrEqual:\n                <<: *__func\n                id: \"lessThanOrEqual\"\n                args:\n                    - [ \"Timestamp\" ]\n                type: *BoolType\n                template: *TimestampLessThanOrEqualTemplate\n                argsTemplate: *TimestampLessThanOrEqualArgsTemplate\n    Symbol: &SymbolType\n        <<: *__type\n        id: \"Symbol\"\n        type: *ObjectType\n        attr:\n            valueOf:\n                <<: *__func\n                id: \"valueOf\"\n                type: *StringType\n                template: *SymbolValueOfTemplate\n            toString:\n                <<: *__func\n                id: \"toString\"\n                type: *StringType\n                template: *SymbolToStringTemplate\n            toJSON:\n                <<: *__func\n                id: \"toJSON\"\n                type: *StringType\n                template: *SymbolToJSONTemplate\n            inspect:\n                <<: *__func\n                id: \"inspect\"\n                type: *StringType\n                template: *SymbolInspectTemplate\n    Decimal128: &Decimal128Type\n        <<: *__type\n        id: \"Decimal128\"\n        type: *ObjectType\n        attr:\n            toString:\n                <<: *__func\n                id: \"toString\"\n                type: *StringType\n            toJSON:\n                <<: *__func\n                id: \"Decimal128toJSON\" # Needs emit method\n                type: *ObjectType\nJSTypes:\n    Date: &DateType\n        <<: *__type\n        id: \"Date\"\n        type: *ObjectType\n        attr: {} # TODO: no built-in date methods added yet\n    RegExp: &RegExpType\n        <<: *__type\n        id: \"RegExp\"\n        type: *ObjectType\n        attr: {}\n\n\n\n\nBsonSymbols:\n    Code: &CodeSymbol\n        id: \"CodeFromShell\"\n        callable: *constructor\n        args:\n            - [ *StringType ]\n            - [ *ObjectType, null ]\n        type: *CodeType\n        attr: {}\n        template: *CodeSymbolTemplate\n        argsTemplate: *CodeSymbolArgsTemplate\n    ObjectId: &ObjectIdSymbol\n        id: \"ObjectId\"\n        callable: *constructor\n        args:\n            - [ *StringType, *NumericType, null ]\n        type: *ObjectIdType\n        attr:\n            createFromHexString:\n                <<: *__func\n                id: \"createFromHexString\"\n                args:\n                    - [ *StringType ]\n                type: *ObjectIdType\n                template: *ObjectIdCreateFromHexStringTemplate\n                argsTemplate: *ObjectIdCreateFromHexStringArgsTemplate\n            createFromTime:\n                <<: *__func\n                id: \"createFromTime\"\n                args:\n                    - [ *NumericType ]\n                type: *ObjectIdType\n                template: *ObjectIdCreateFromTimeTemplate\n                argsTemplate: *ObjectIdCreateFromTimeArgsTemplate\n            isValid:\n                <<: *__func\n                id: \"isValid\"\n                args:\n                    - [ *StringType ]\n                type: *BoolType\n        template: *ObjectIdSymbolTemplate\n        argsTemplate: *CodeSymbolArgsTemplate\n    Binary: &BinarySymbol\n        id: \"Binary\"\n        callable: *constructor\n        args:\n            - [ *StringType, *NumericType, *ObjectType ]\n            - [ *NumericType, null ]\n        type: *BinaryType\n        attr:\n            SUBTYPE_DEFAULT:\n                id: \"SUBTYPE_DEFAULT\"\n                callable: *var\n                args: null\n                type: *IntegerType\n                template: *BinarySymbolSubtypeDefaultTemplate\n            SUBTYPE_FUNCTION:\n                id: \"SUBTYPE_FUNCTION\"\n                callable: *var\n                args: null\n                type: *IntegerType\n                template: *BinarySymbolSubtypeFunctionTemplate\n            SUBTYPE_BYTE_ARRAY:\n                id: \"SUBTYPE_BYTE_ARRAY\"\n                callable: *var\n                args: null\n                type: *IntegerType\n                template: *BinarySymbolSubtypeByteArrayTemplate\n            SUBTYPE_UUID_OLD:\n                id: \"SUBTYPE_UUID_OLD\"\n                callable: *var\n                args: null\n                type: *IntegerType\n                template: *BinarySymbolSubtypeUuidOldTemplate\n            SUBTYPE_UUID:\n                id: \"SUBTYPE_UUID\"\n                callable: *var\n                args: null\n                type: *IntegerType\n                template: *BinarySymbolSubtypeUuidTemplate\n            SUBTYPE_MD5:\n                id: \"SUBTYPE_MD5\"\n                callable: *var\n                args: null\n                type: *IntegerType\n                template: *BinarySymbolSubtypeMd5Template\n            SUBTYPE_USER_DEFINED:\n                id: \"SUBTYPE_USER_DEFINED\"\n                callable: *var\n                args: null\n                type: *IntegerType\n                template: *BinarySymbolSubtypeUserDefinedTemplate\n        template: *BinarySymbolTemplate\n        argsTemplate: *BinarySymbolArgsTemplate\n    DBRef:\n        id: \"DBRef\"\n        callable: *constructor\n        args:\n            - [ *StringType ]\n            - [ *ObjectIdType ]\n            - [ *StringType, null ]\n        type: *DBRefType\n        attr: {}\n        template: *DBRefSymbolTemplate\n        argsTemplate: *DBRefSymbolArgsTemplate\n    Double:\n        id: \"Double\"\n        callable: *constructor\n        args:\n            - [ *NumericType, *StringType ]\n        type: *DoubleType\n        attr: {}\n        template: *DoubleSymbolTemplate\n        argsTemplate: *DoubleSymbolArgsTemplate\n    Int32:\n        id: \"Int32\"\n        callable: *constructor\n        args:\n            - [ *NumericType, *StringType ]\n        type: *Int32Type\n        attr: {}\n        template: *Int32SymbolTemplate\n        argsTemplate: *Int32SymbolArgsTemplate\n    Long:\n        id: \"Long\"\n        callable: *constructor\n        args:\n            - [ *NumericType ]\n            - [ *NumericType ]\n        type: *LongType\n        attr:\n            MAX_VALUE:\n                id: \"MAX_VALUE\"\n                callable: *var\n                args: null\n                type: *LongType\n                attr: {}\n                template: *LongSymbolMaxTemplate\n                argsTemplate: *LongSymbolMaxArgsTemplate\n            MIN_VALUE:\n                id: \"MIN_VALUE\"\n                callable: *var\n                args: null\n                type: *LongType\n                attr: {}\n                template: *LongSymbolMinTemplate\n                argsTemplate: *LongSymbolMinArgsTemplate\n            ZERO:\n                id: \"ZERO\"\n                callable: *var\n                args: null\n                type: *LongType\n                attr: {}\n                template: *LongSymbolZeroTemplate\n                argsTemplate: *LongSymbolZeroArgsTemplate\n            ONE:\n                id: \"ONE\"\n                callable: *var\n                args: null\n                type: *LongType\n                attr: {}\n                template: *LongSymbolOneTemplate\n                argsTemplate: *LongSymbolOneArgsTemplate\n            NEG_ONE:\n                id: \"NEG_ONE\"\n                callable: *var\n                args: null\n                type: *LongType\n                attr: {}\n                template: *LongSymbolNegOneTemplate\n                argsTemplate: *LongSymbolNegOneArgsTemplate\n            fromBits:\n                id: \"LongfromBits\" # Needs emit method\n                callable: *func\n                args:\n                    - [ *IntegerType ]\n                    - [ *IntegerType ]\n                type: *LongType\n                attr: {}\n                template: *LongSymbolFromBitsTemplate\n                argsTemplate: *LongSymbolFromBitsArgsTemplate\n            fromInt:\n                id: \"fromInt\"\n                callable: *func\n                args:\n                    - [ *IntegerType ]\n                type: *LongType\n                attr: {}\n                template: *LongSymbolFromIntTemplate\n                argsTemplate: *LongSymbolFromIntArgsTemplate\n            fromNumber:\n                id: \"fromNumber\"\n                callable: *func\n                args:\n                    - [ *NumericType ]\n                type: *LongType\n                attr: {}\n                template: *LongSymbolFromNumberTemplate\n                argsTemplate: *LongSymbolFromNumberArgsTemplate\n            fromString:\n                id: \"fromString\"\n                callable: *func\n                args:\n                    - [ *StringType ]\n                    - [ *IntegerType, null ]\n                type: *LongType\n                attr: {}\n                template: *LongSymbolFromStringTemplate\n                argsTemplate: *LongSymbolFromStringArgsTemplate\n        template: *LongSymbolTemplate\n        argsTemplate: *LongSymbolArgsTemplate\n    MinKey:\n        id: \"MinKey\"\n        callable: *constructor\n        args: []\n        type: *MinKeyType\n        attr: {}\n        template: *MinKeySymbolTemplate\n        argsTemplate: *MinKeySymbolArgsTemplate\n    MaxKey:\n        id: \"MaxKey\"\n        callable: *constructor\n        args: []\n        type: *MaxKeyType\n        attr: {}\n        template: *MaxKeySymbolTemplate\n        argsTemplate: *MaxKeySymbolArgsTemplate\n    Timestamp:\n        id: \"Timestamp\"\n        callable: *constructor\n        args:\n            - [ *NumericType ]\n            - [ *NumericType ]\n        type: *TimestampType\n        attr: {}\n        template: *TimestampSymbolTemplate\n        argsTemplate: *TimestampSymbolArgsTemplate\n    Symbol:\n        id: \"Symbol\"\n        callable: *constructor\n        args:\n            - [ *StringType ]\n        type: *SymbolType\n        attr: {}\n        template: *SymbolSymbolTemplate\n        argsTemplate: *SymbolSymbolArgsTemplate\n    BSONRegExp:\n        id: \"BSONRegExp\"\n        callable: *constructor\n        args:\n            - [ *StringType ]\n            - [ *StringType, null ]\n        type: *BSONRegExpType\n        attr: {}\n        template: *BSONRegExpSymbolTemplate\n        argsTemplate: *BSONRegExpSymbolArgsTemplate\n    Decimal128:\n        id: \"Decimal128\"\n        callable: *constructor\n        args:\n            - [ *ObjectType ]\n        type: *Decimal128Type\n        attr:\n            fromString:\n                id: \"fromString\"\n                callable: *func\n                args:\n                    - [ *StringType ]\n                type: *Decimal128Type\n                attr: {}\n                template: *Decimal128SymbolFromStringTemplate\n                argsTemplate: *Decimal128SymbolFromStringArgsTemplate\n        template: *Decimal128SymbolTemplate\n        argsTemplate: *Decimal128SymbolArgsTemplate\n\nJSSymbols:\n    Object:\n        id: \"Object\"\n        callable: *var\n        args: null\n        type: *ObjectType\n        attr:\n            create:\n                id: \"create\"\n                callable: *func\n                args:\n                    - [ *ObjectType ]\n                type: *ObjectType\n                attr: {}\n                template: *ObjectSymbolCreateTemplate\n                argsTemplate: *ObjectSymbolCreateArgsTemplate\n        template: *ObjectSymbolTemplate\n        argsTemplate: *ObjectSymbolArgsTemplate\n    Number:\n        id: \"Number\"\n        callable: *constructor\n        args:\n            - [ *NumericType, *StringType ]\n        type: *NumericType\n        attr: {} # TODO: no built-in number funcs added yet\n        template: *NumberSymbolTemplate\n        argsTemplate: *NumberSymbolArgsTemplate\n    Date: # Needs emit method\n        id: \"Date\"\n        callable: *constructor\n        args: null\n        type: *DateType\n        attr: # TODO: add more date funcs?\n            now:\n                id: \"now\"\n                callable: *constructor\n                args: []\n                type: *DateType\n                attr: {}\n                template: *DateSymbolNowTemplate\n                argsTemplate: *DateSymbolNowArgsTemplate\n        template: *DateSymbolTemplate\n        argsTemplate: *DateSymbolArgsTemplate\n    RegExp: # Needs emit method\n        id: \"RegExp\"\n        callable: *constructor\n        args:\n            - [ *StringType ]\n            - [ *StringType, null ]\n        type: *RegExpType\n        attr: {}\n        template: *RegExpSymbolTemplate\n        argsTemplate: *RegExpSymbolArgsTemplate\n\n";