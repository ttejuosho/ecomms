import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@taistores.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@taistores.com',
        password: bcrypt.hashSync('123456')
    },
    {
        name: 'Jane Doe',
        email: 'jane@taistores.com',
        password: bcrypt.hashSync('123456')
    }
]

export default users