export class celsiaRouting {
    public static services = {
        webService: 'https://us-central1-summa-celsia.cloudfunctions.net/'
    }

    public static loginServices = {
        login: celsiaRouting.services.webService + 'customLogin'
    }

    public static loggedServices = {
        crearRadicado: celsiaRouting.services.webService + 'radicado'
    }
}