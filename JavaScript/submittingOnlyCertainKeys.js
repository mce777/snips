// method 1
function getObjectArrayKeys(arrayItemsToBeMapped, keysToKeep) {
    return arrayItemsToBeMapped.items.map((e) => {
        const obj = {}
        // eslint-disable-next-line no-return-assign
        keysToKeep.forEach((k) => (obj[k] = e[k]))
        return obj
    })
}

// method 2
// here you basically did the same thing, just inline
disabilities: damageObjectDatum.disabilities.items.map((item) => {
    return {
        id: item.id,
        startDate: item.startDate,
        endDate: item.endDate,
        disabilityPercentage: parseInt(item.disabilityPercentage, 10),
    }
})
