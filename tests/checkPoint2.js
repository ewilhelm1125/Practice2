var checkPoint
module.exports = {
    beforeEach: browser => {
       checkPoint = browser.page.checkPoint2()
       checkPoint.navigate()
       
    },
    after: browser => {
        checkPoint.end()
    },
    'Even Odd': browser => {
        checkPoint
            .setValue('@evenOddInput', '4')
            .click('@evenOddButton')
            .assert.containsText('@evenResults','4')
            .clearValue('@evenOddInput')
            .setValue('@evenOddInput', '3')
            .click('@evenOddButton')
            .assert.containsText('@oddResults','3')
            .clearValue('@evenOddInput')
            .setValue('@evenOddInput', ' ')
            .click('@evenOddButton')
            .assert.containsText('@evenResults','null')
            .clearValue('@evenOddInput')
            .setValue('@evenOddInput', 'w')
            .click('@evenOddButton')
            .assert.containsText('@oddResults','null')
    },
    'Filter Object': browser => {
        checkPoint
            .setValue('@objectFilterInput', 'name')
            .click('@objectFilterButton')
            .assert.containsText('@objectFilterResults','{ "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" }')
            .clearValue('@objectFilterInput')
            .setValue('@objectFilterInput', 'title')
            .click('@objectFilterButton')
            .assert.containsText('@objectFilterResults','Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" } ]')
            .clearValue('@objectFilterInput')
            .setValue('@objectFilterInput', 'age')
            .click('@objectFilterButton')
            .assert.containsText('@objectFilterResults','Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
            .clearValue('@objectFilterInput')
            .setValue('@objectFilterInput', 'hairColor')
            .click('@objectFilterButton')
            .assert.containsText('@objectFilterResults','Filtered: [ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
            .clearValue('@objectFilterInput')
    },
    'Filter String': browser =>{
        checkPoint
            .setValue('@nameFilterInput', 'James')
            .click('@nameFilterButton')
            .assert.containsText('@nameFilterResults','Filtered Names: [ "James" ]')
            .clearValue('@nameFilterInput')
            .setValue('@nameFilterInput', 'Jessica')
            .click('@nameFilterButton')
            .assert.containsText('@nameFilterResults','Filtered Names: [ "Jessica" ]')
            .clearValue('@nameFilterInput')
            .setValue('@nameFilterInput', 'Melody')
            .click('@nameFilterButton')
            .assert.containsText('@nameFilterResults','Filtered Names: [ "Melody" ]')
            .clearValue('@nameFilterInput')
            .setValue('@nameFilterInput', 'Tyler')
            .click('@nameFilterButton')
            .assert.containsText('@nameFilterResults','Filtered Names: [ "Tyler" ]')
            .clearValue('@nameFilterInput')
            .setValue('@nameFilterInput', 'Blake')
            .click('@nameFilterButton')
            .assert.containsText('@nameFilterResults','Filtered Names: [ "Blake" ]')
            .clearValue('@nameFilterInput')
            .setValue('@nameFilterInput', 'Jennifer')
            .click('@nameFilterButton')
            .assert.containsText('@nameFilterResults','Filtered Names: [ "Jennifer" ]')
            .clearValue('@nameFilterInput')
            .setValue('@nameFilterInput', 'Mark')
            .click('@nameFilterButton')
            .assert.containsText('@nameFilterResults','Filtered Names: [ "Mark" ]')
            .clearValue('@nameFilterInput')
            .setValue('@nameFilterInput', 'Maddy')
            .click('@nameFilterButton')
            .assert.containsText('@nameFilterResults','Filtered Names: [ "Maddy" ]')
            .clearValue('@nameFilterInput')
    },
    'Palindrome' : browser =>{
        checkPoint
            .setValue('@palindromeInput', 'madam')
            .click('@palindromeButton')
            .assert.containsText('@palindromeResults','true')
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput', 'sleepy')
            .click('@palindromeButton')
            .assert.containsText('@palindromeResults','false')
    },
    'Sum' : browser =>{
        checkPoint
            .setValue('@sumInput1', '5')
            .setValue('@sumInput2', ' ')
            .click('@sumButton')
            .assert.containsText('@sumResults','5')
            .clearValue('@sumInput1')  
            .clearValue('@sumInput2')
            .setValue('@sumInput1', '10')
            .setValue('@sumInput2', '-5')
            .click('@sumButton')
            .assert.containsText('@sumResults','5')
            .clearValue('@sumInput1')  
            .clearValue('@sumInput2')
    }
}