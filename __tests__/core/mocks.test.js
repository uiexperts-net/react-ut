import { fetchUserList, processUserList } from "../../src/core/mocks";

import axios from "axios";
import { addValues,subtractValues } from "../../src/core/basics";

jest.mock('axios');
const userList = ['selvam', 'ravi', 'ramjith']

jest.mock('../../src/core/basics',()=>{
    const originalModule = jest.requireActual('../../src/core/basics');
    return {
        __esModule: true,
        ...originalModule,
        addValues: jest.fn((a,b)=>(a+b+100))
    }
})

describe('Demonstration of using Mocks for Unit Testing', () => {
    
    test('validate mock function', () => {
        const mockFormatUserCallback = jest.fn((userName) => `MR.${userName.toUpperCase()}`)
        processUserList(userList, mockFormatUserCallback);
        expect(mockFormatUserCallback.mock.calls).toHaveLength(3)
        expect(mockFormatUserCallback.mock.calls[1][0]).toBe('ravi')
        expect(mockFormatUserCallback.mock.results[1].value).toBe('MR.RAVI')
    })

    test('validate mock function return values', () => {
        const mockCallbackReturn = jest.fn()
        mockCallbackReturn.mockReturnValueOnce('one').mockReturnValueOnce('two').mockReturnValue('default');
        processUserList(userList, mockCallbackReturn);
        expect(mockCallbackReturn.mock.results[1].value).toBe('two')
    })

    test('validate mock modules', () => {
        axios.get.mockResolvedValue({ data: userList });
        return fetchUserList().then(data => expect(data).toEqual(userList))
    })

    test('validate partial mocking of a module',()=>{    
            expect(addValues(2,3)).toBe(105);
            expect(subtractValues(5,2)).toBe(3);            
            expect(subtractValues(5,2)).toMatchSnapshot();            

    })

});