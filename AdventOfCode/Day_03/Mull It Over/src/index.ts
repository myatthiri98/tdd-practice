import { readFileSync } from 'fs';
import { join } from 'path';
import { sumOfValidMultiplications } from './mull';

const input = readFileSync(join(__dirname, '../input.txt'), 'utf-8');
const result = sumOfValidMultiplications(input);

console.log('Sum of all valid multiplications:', result); 