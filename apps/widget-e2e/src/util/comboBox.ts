// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

function getItemSelector(item: string | number): string {
  if (typeof item === "string") {
    return `:contains("${item}")`;
  }
  return `:eq(${item})`;
}
export function selectComboBox(selector: string, item: string | number): void {
  cy.get(`${selector} button.ms-ComboBox-CaretDown-button`)
    .click()
    .get(
      `${selector} div.ms-ComboBox-optionsContainerWrapper button${getItemSelector(
        item
      )}`
    )
    .then(($btn) => {
      $btn.trigger("click");
    });
}
export function getComboBoxValue(selector: string): string | undefined {
  return cy.$$(`${selector} input.ms-ComboBox-Input`).val()?.toString();
}
