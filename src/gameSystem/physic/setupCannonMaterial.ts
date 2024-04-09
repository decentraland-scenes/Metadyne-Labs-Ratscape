import * as CANNON from 'cannon/build/cannon'


const physicGroundMaterial = new CANNON.Material('groundMaterial')

const physicBoxMaterial: CANNON.Material = new CANNON.Material("boxMaterial")

const physicWallMaterial: CANNON.Material = new CANNON.Material("wallMaterial")

const boxToGroundContactMaterial: CANNON.ContactMaterial = new CANNON.ContactMaterial(
    physicGroundMaterial, 
    physicBoxMaterial, 
    {
        friction: 0.4,
        restitution: 0,
    }
)

const boxToWallContactMaterial: CANNON.ContactMaterial = new CANNON.ContactMaterial(
    physicWallMaterial, 
    physicBoxMaterial, 
    {
        friction: 1,
        restitution: 0,
        contactEquationStiffness: 1000,
    }
)

const boxToBoxContactMaterial: CANNON.ContactMaterial = new CANNON.ContactMaterial(
    physicBoxMaterial, 
    physicBoxMaterial,
    {
        friction: 1,
        restitution: 0,
        contactEquationStiffness: 1000,
    }
)

export const physicMaterial = {
    physicGroundMaterial,
    physicBoxMaterial,
    physicWallMaterial
}

export const physicContactMaterial = {
    boxToGroundContactMaterial,
    boxToBoxContactMaterial,
    boxToWallContactMaterial
}