import mysql from 'mysql2/promise';
import { getProperty } from './configurationReader';

let connection;

export const openConnection = async () => {
    const host = await getProperty('ui-config.json', 'mysql.url');
    const user = await getProperty('ui-config.json', 'yollhrm.database.username');
    const password = await getProperty('ui-config.json', 'yollhrm.database.password');
    connection = await mysql.createConnection({ host, user, password });
};

export const executeSQLQuery = async (query) => {
    const [rows] = await connection.execute(query);
    return rows;
};

export const closeConnection = async () => {
    await connection.end();
};
