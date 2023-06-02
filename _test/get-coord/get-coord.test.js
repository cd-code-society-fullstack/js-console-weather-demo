const axios = require('axios');
const {getCoordinatesFromZip} = require("../../src/get-coord");

jest.mock('axios');
jest.mock('../../src/data/api-keys.json', () => ({
    weather:'abc-def-123-456',
    opencage:"abc-def-123-456"
}), { virtual: true });

const sampleResponse ={
    data:{
        results:[
            { 
                geometry:{
                    lat: 34.0950041, 
                    lng: -118.3997281
                } 
            }
        ]
    }
};

test("Get Cooridnates from Zipcode", async()=>{
    const expected =  { 
        lat: 34.0950041, 
        lng: -118.3997281 
    };

    axios.get.mockImplementationOnce(()=>Promise.resolve(sampleResponse));

    const coordData = await getCoordinatesFromZip("19802");
    expect(coordData).toEqual(expected);
})