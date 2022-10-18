const router = async () => {
    const routes = [
        {
            'path': '/',
            'view': () => {
                console.log('Breed')
            }
        },
        {
            'path': '/subbreed',
            'view': () => {
                console.log('Sub Breed')
            }
        },
    ]
}