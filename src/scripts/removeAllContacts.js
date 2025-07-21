import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        await writeContacts([]);
        console.log('🗑️ All contacts have been removed.');
    } catch (error) {
        console.error('❌ Failed to remove contacts:', error.message);
    }
};

removeAllContacts();


