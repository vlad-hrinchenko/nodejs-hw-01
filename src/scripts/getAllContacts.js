import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        console.log('📋 All contacts:', contacts);
        return contacts;
    } catch (error) {
        console.error('❌ Failed to read contacts:', error.message);
        return [];
    }
};

console.log(await getAllContacts());
