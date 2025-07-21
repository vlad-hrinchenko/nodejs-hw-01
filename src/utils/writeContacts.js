import { writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    try {
        const data = JSON.stringify(updatedContacts, null, 2);
        await writeFile(PATH_DB, data, 'utf-8');
    } catch (error) {
        console.error('Failed to write contacts:', error.message);
        throw error;
    }
};
