import { SiteClient } from 'datocms-client'

export default async function createCommunity(request, response){

    if ( request.method === 'POST' ) {

        const TOKEN = 'e992d84d8ce4f644eb858a8fce8c12';
        const client = new SiteClient(TOKEN);

        const created = await client.items.create({
            itemType: '968453',
            ...request.body
        });

        console.log(created)

        response.json({
            created
        })

        return;

    }

    response.status(404).json({
        message: 'GET method is not available for this'
    })
    
}