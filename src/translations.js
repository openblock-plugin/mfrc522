/* eslint-disable quote-props */
/* eslint-disable max-len */
/**
 * Translation file for this resouce.
 *
 * IMPORTANT:
 * - The "en" (English) section is automatically generated from source files.
 *   Do NOT modify the "en" section manually.
 * - Other language sections (e.g., "zh-cn", "zh-tw", "ja", etc.) should be
 *   manually translated by you.
 * - When you run the extraction script again, only the "en" section will be
 *   updated. Your manual translations in other languages will be preserved.
 *
 * Structure:
 * - interface: translations for name/description (used by GUI formatMessage)
 * - extensions: translations for extension blocks (used by VM formatMessage)
 * - blocks: translations for Blockly blocks (used by Blockly.Msg)
 */

export default {
    'interface': {
        'en': {
            'mfrc522.name': 'MFRC-522 Module',
            'mfrc522.description': '13.56MHz radio frequency identification module using spi interface.'
        },
        'ru': {
            'mfrc522.name': 'MFRC-522 Module',
            'mfrc522.description': '13.56MHz radio frequency identification module using spi interface.'
        },
        'zh-cn': {
            'mfrc522.name': 'MFRC-522 Module',
            'mfrc522.description': '13.56MHz radio frequency identification module using spi interface.'
        },
        'zh-tw': {
            'mfrc522.name': 'MFRC-522 Module',
            'mfrc522.description': '13.56MHz radio frequency identification module using spi interface.'
        }
    },
    'extensions': {
        'en': {},
        'ru': {},
        'zh-cn': {},
        'zh-tw': {}
    },
    'blocks': {
        'en': {
            'MFRC522_CATEGORY': 'MFRC522',
            'MFRC522_INIT': 'init mfrc522 pin CS %1 RST %2',
            'MFRC522_ISNEWCARDPRESENT': 'new card present?',
            'MFRC522_READCARDSERIAL': 'mfrc522 successfully read card serial number?',
            'MFRC522_GETCARDTYPENAME': 'mfrc522 get card type name',
            'MFRC522_GETCARDUID': 'mfrc522 get card UID',
            'MFRC522_NUMBERTOHEXSTRING': 'mfrc522 %1 to hex string',
            'MFRC522_SETKEY': 'mfrc522 set secret key %1',
            'MFRC522_VERIFICATIONKEY': 'mfrc522 verification block %1 key is correct?',
            'MFRC522_READBLOCKDATA': 'mfrc522 read block %1',
            'MFRC522_GETBLOCKDATA': 'mfrc522 block data (type %1)',
            'MFRC522_DATATYPE_NUBMER': 'number',
            'MFRC522_DATATYPE_STRING': 'string',
            'MFRC522_GETBLOCKDATA_TOOLTIP': 'String length less than 16 byte.',
            'MFRC522_WRITEBLOCKDATA': 'mfrc522 write %1 to block %2 (type %3)',
            'MFRC522_WRITEKEYTOSECTOR': 'mfrc522 write key %1 to sector %2',
            'MFRC522_PRINTSECTORDATA': 'mfrc522 print sector %1 data',
            'MFRC522_HALT': 'mfrc522 halt'
        },
        'ru': {
            'MFRC522_CATEGORY': 'MFRC522',
            'MFRC522_INIT': 'init mfrc522 pin CS %1 RST %2',
            'MFRC522_ISNEWCARDPRESENT': 'new card present?',
            'MFRC522_READCARDSERIAL': 'mfrc522 successfully read card serial number?',
            'MFRC522_GETCARDTYPENAME': 'mfrc522 get card type name',
            'MFRC522_GETCARDUID': 'mfrc522 get card UID',
            'MFRC522_NUMBERTOHEXSTRING': 'mfrc522 %1 to hex string',
            'MFRC522_SETKEY': 'mfrc522 set secret key %1',
            'MFRC522_VERIFICATIONKEY': 'mfrc522 verification block %1 key is correct?',
            'MFRC522_READBLOCKDATA': 'mfrc522 read block %1',
            'MFRC522_GETBLOCKDATA': 'mfrc522 block data (type %1)',
            'MFRC522_DATATYPE_NUBMER': 'number',
            'MFRC522_DATATYPE_STRING': 'string',
            'MFRC522_GETBLOCKDATA_TOOLTIP': 'String length less than 16 byte.',
            'MFRC522_WRITEBLOCKDATA': 'mfrc522 write %1 to block %2 (type %3)',
            'MFRC522_WRITEKEYTOSECTOR': 'mfrc522 write key %1 to sector %2',
            'MFRC522_PRINTSECTORDATA': 'mfrc522 print sector %1 data',
            'MFRC522_HALT': 'mfrc522 halt'
        },
        'zh-cn': {
            'MFRC522_CATEGORY': 'MFRC522',
            'MFRC522_INIT': 'init mfrc522 pin CS %1 RST %2',
            'MFRC522_ISNEWCARDPRESENT': 'new card present?',
            'MFRC522_READCARDSERIAL': 'mfrc522 successfully read card serial number?',
            'MFRC522_GETCARDTYPENAME': 'mfrc522 get card type name',
            'MFRC522_GETCARDUID': 'mfrc522 get card UID',
            'MFRC522_NUMBERTOHEXSTRING': 'mfrc522 %1 to hex string',
            'MFRC522_SETKEY': 'mfrc522 set secret key %1',
            'MFRC522_VERIFICATIONKEY': 'mfrc522 verification block %1 key is correct?',
            'MFRC522_READBLOCKDATA': 'mfrc522 read block %1',
            'MFRC522_GETBLOCKDATA': 'mfrc522 block data (type %1)',
            'MFRC522_DATATYPE_NUBMER': 'number',
            'MFRC522_DATATYPE_STRING': 'string',
            'MFRC522_GETBLOCKDATA_TOOLTIP': 'String length less than 16 byte.',
            'MFRC522_WRITEBLOCKDATA': 'mfrc522 write %1 to block %2 (type %3)',
            'MFRC522_WRITEKEYTOSECTOR': 'mfrc522 write key %1 to sector %2',
            'MFRC522_PRINTSECTORDATA': 'mfrc522 print sector %1 data',
            'MFRC522_HALT': 'mfrc522 halt'
        },
        'zh-tw': {
            'MFRC522_CATEGORY': 'MFRC522',
            'MFRC522_INIT': 'init mfrc522 pin CS %1 RST %2',
            'MFRC522_ISNEWCARDPRESENT': 'new card present?',
            'MFRC522_READCARDSERIAL': 'mfrc522 successfully read card serial number?',
            'MFRC522_GETCARDTYPENAME': 'mfrc522 get card type name',
            'MFRC522_GETCARDUID': 'mfrc522 get card UID',
            'MFRC522_NUMBERTOHEXSTRING': 'mfrc522 %1 to hex string',
            'MFRC522_SETKEY': 'mfrc522 set secret key %1',
            'MFRC522_VERIFICATIONKEY': 'mfrc522 verification block %1 key is correct?',
            'MFRC522_READBLOCKDATA': 'mfrc522 read block %1',
            'MFRC522_GETBLOCKDATA': 'mfrc522 block data (type %1)',
            'MFRC522_DATATYPE_NUBMER': 'number',
            'MFRC522_DATATYPE_STRING': 'string',
            'MFRC522_GETBLOCKDATA_TOOLTIP': 'String length less than 16 byte.',
            'MFRC522_WRITEBLOCKDATA': 'mfrc522 write %1 to block %2 (type %3)',
            'MFRC522_WRITEKEYTOSECTOR': 'mfrc522 write key %1 to sector %2',
            'MFRC522_PRINTSECTORDATA': 'mfrc522 print sector %1 data',
            'MFRC522_HALT': 'mfrc522 halt'
        }
    }
};
