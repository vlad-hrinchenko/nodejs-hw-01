import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';



const generateContacts = async (number) => {
    try {
        const existingContacts = await readContacts();

        const newContacts = Array.from({ length: number }, () => createFakeContact());

        const updatedContacts = [...existingContacts, ...newContacts];

        await writeContacts(updatedContacts);

          console.log(`✅ Added ${number} contacts. Total contacts: ${updatedContacts.length}`);
  } catch (error) {
    console.error('❌ Failed to generate contacts:', error.message);
  }
};

generateContacts(5);
