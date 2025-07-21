import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        const count = contacts.length;
        console.log(`🔢 Total contacts: ${count}`);
    return count;
    } catch (error) {
        console.error('❌ Failed to count contacts:', error.message);
    return 0;
    }
};

console.log(await countContacts());
