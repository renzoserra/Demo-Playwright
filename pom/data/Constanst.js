import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    ULRSAUCEDEMOHOME:process.env.ULRSAUCEDEMO,
    ULRSAUCEDEMOINVENTORY: 'https://www.saucedemo.com/inventory.html'

}

export const CREDENTIALS = {
    SAUCEDEMOUSER:process.env.SAUCEDEMOUSER,
    SAUCEDEMOPASSWORD:process.env.SAUCEDEMOPASSWORD
}