import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const existingContacts = await readContacts();

        const newContacts = createFakeContact();

        const updatedContacts = [...existingContacts, newContacts];

        await writeContacts(updatedContacts);

        console.log('✅ One contact added. Total contacts:', updatedContacts.length);
    } catch (error) {
        console.error('❌ Failed to add contact:', error.message);
    }
};

addOneContact();
