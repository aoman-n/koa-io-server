import * as redis from 'redis';

const pub = redis.createClient(6379, 'localhost');
const sub = redis.createClient(6379, 'localhost');

export default class Redis {

}