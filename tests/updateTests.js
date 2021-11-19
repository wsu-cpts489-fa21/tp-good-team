import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

fixture `updateTests`
    .page `https://localhost:3000`;

test('updateMouse', async t => {
    await t.click('#Update Round')
    .expect(Selector('#UpdateRound').focused).eql(true);
});

var focusUpdateBtn = ClientFunction (() => {
    document.getElementById('Update Button').focus();
});

test('updateKeyboard', async t => {
    await focusUpdateBtn();
    await t.pressKey('enter')
    .expect(Selector('#UpdateRound').focused).eql(true);
})