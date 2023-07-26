# Homeflow Posh Property Tech Test

This is a very simple React app that renders some property data.

Please complete the following three tasks:

1. Make some changes to the code so the search box can be used to filter the properties by description. For example, if a user enters 'superb' into the input then only properties with the word 'superb' in the short description should be displayed. If the search term is deleted then all properties should show again.

2. Not all of the properties in the data have photos, and these are currently displaying in the browser as broken images. Edit the code so if a property has no photos, a suitable placeholder is rendered instead.

3. In the App component we have created a state array called `savedProperties`. Each property card features a button with a yellow bookmark icon. Adjust the code so that clicking this button _saves_ the property by adding it to the `savedProperties` array and turning the icon red. Clicking the bookmark button again after a property is saved should _unsave_ it, removing it from the `savedProperties` array and returning the icon colour to yellow. A user should be able to have multiple properties saved at a time.

Feel free to add any other changes or flourishes to make your app stand out from the rest!

Once you have completed the test, please upload it to Github and send us a link to the repo. Good luck!

Use `npm install` to install dependencies and `npm start` to run the app locally.
