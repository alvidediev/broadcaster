db = db.getSiblingDB('admin');
db.createUser({
    user: 'admin',
    pwd: 'adminpassword',
    roles: [ { role: 'root', db: 'admin' } ]
});