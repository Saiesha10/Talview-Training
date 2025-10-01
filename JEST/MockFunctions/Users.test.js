import axios from 'axios';
import Users from './users';


jest.mock('axios');
test('should fetch users',()=>{
    const users=[{name:'ishaan'}];
    const resp={data:users};
    axios.get.mockResolveValue(resp);
    return Users.all().then(data=>expect(data).toEqual(users));


});