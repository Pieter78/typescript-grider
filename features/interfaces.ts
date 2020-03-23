interface Reportable {
  report(): string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  report(): string {
    return `Name: ${this.name}`
  },
}

const printSummary = (item: Reportable): void => {
  console.log(`Name: ${item.report()}`)
}

printSummary(oldCivic)
