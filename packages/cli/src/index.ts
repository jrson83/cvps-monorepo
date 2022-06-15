import * as tsImport from 'ts-import'
import { resolve } from 'path'
/* import { promises as fs } from 'fs' */

export default function runCLI(Config: any) {
  return `ScaffiConfig: ${JSON.stringify(Config)}`
}

/* async function testMy() {
  const isProduction = process.env.NODE_ENV === 'production'
  console.log(isProduction)
  const configPath = isProduction ? resolve(process.cwd(), 'lib', 'src', 'scaffi.config.js') : resolve(process.cwd(), '..', 'cvps', 'scaffi.config.ts') */
/* const conf = await fs.readFile(configPath, { encoding: 'utf-8' }) */
/* 
  const conf = (await import(configPath)).default
  console.log(process.env.NODE_ENV)
  console.log(conf)
  console.log('CLI', process.argv)
}

testMy()
 */

const main = async () => {
  const isDevelopment = process.env.NODE_ENV === 'development'
  const filePath = isDevelopment ? resolve(process.cwd(), '..', 'cvps', 'scaffi.config.ts') : resolve(process.cwd(), 'scaffi.config.ts')
  const scaffiConfig = (await tsImport.load(filePath)).default

  console.log(scaffiConfig)
}

main()
