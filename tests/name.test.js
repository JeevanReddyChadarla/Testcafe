import { Selector } from 'testcafe';

fixture `details`
    .page `http://localhost:3000/`;

const placeSelect = Selector('#place');
const placeOption = placeSelect.find('option');
   
    test('Select an option from drop-down', async t => {
        await t
            .click(placeSelect)
            .click(placeOption.withText('Chennai'))
            .expect(placeSelect.value).eql('Chennai')
    })
