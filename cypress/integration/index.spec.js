const { intersection } = require('ramda')

describe('Real-time AQI APP end2end test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('it shows the name of local city', () => {
    cy.get('.MuiCardHeader-content').get('span').contains('2020')
  })

  it('it shows AQI data of local city', () => {
    cy.get('.MuiTypography-displayBlock').contains('Melbourne CBD')
  })
  it('search', () => {
    cy.get('input[placeholder="Search City..."]').type('paris')
    cy.get('button').contains('SEARCH').click()
    cy.get(
      'p[class="MuiTypography-root makeStyles-title-7 MuiTypography-body1"]'
    ).contains('Paris')
  })
})
