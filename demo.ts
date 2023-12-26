const db = await Deno.openKv()


const preferences = {
  username: 'johndoe',
  theme: 'dark',
  language: 'en-US'
}
const yamPreferences = {
  username: 'yam',
  theme: 'light',
  language: 'es-ES'
}

//  await db.set(['preferences', 'johndoe'], preferences)
//  await db.set(['preferences', 'yam'], yamPreferences)

const johnPreferencesRes = await db.get(['preferences', 'johndoe'])
const yamPreferencesRes = await db.get(['preferences', 'yam'])

// console.log(johnPreferencesRes)
// console.log(yamPreferencesRes)

const [johnPreferencesResult, yamPreferencesResult] = await db.getMany([
  ['preferences', 'johndoe'],
  ['preferences', 'yam']  
])

// console.log(johnPreferencesResult)
// console.log(yamPreferencesResult)

const entries = db.list({ prefix: ['preferences'] })
for await (const entry of entries) {
  console.log(entry)
}