import axios from "axios";
import { addValues, subtractValues } from "../../src/core/basics";
import { executeTimer, fetchUserList, processUserList,readFileData } from "../../src/core/mocks";


// Module Mocking
jest.mock('axios');
jest.mock('fs');

// Partial Mocking
jest.mock('../../src/core/basics', () => {
    const originalModule = jest.requireActual('../../src/core/basics');
    return {
        __esModule: true,
        ...originalModule,
        addValues: jest.fn((a, b) => (a + b + 100))
    }
})

// Mock Timers
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

// Initialize values
const userList = ['selvam', 'ravi', 'ramjith']



describe('Demonstration of Mocks for Unit Testing', () => {

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

    test('validate partial mocking of a module', () => {
        expect(addValues(2, 3)).toBe(105);
        expect(subtractValues(5, 2)).toBe(3);
        expect(subtractValues(5, 2)).toMatchSnapshot();
    })

    test('validate settimeout with fake timer', () => {
        executeTimer();
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });

    test('validate settimeout with fake timer with callback', () => {
        const callback = jest.fn();
        executeTimer(callback);

        expect(callback).not.toHaveBeenCalled();

        jest.runAllTimers();
        expect(callback).toHaveBeenCalled();
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test('validate manual mocking for a module',()=>{
          const mockFunc = jest.fn();
          readFileData(mockFunc);        
        expect(mockFunc).toHaveBeenCalled();
    })


});

