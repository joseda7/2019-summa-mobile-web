export class celsiaRouting {
    public static services = {
        webService: '123.123.123.123'
    }

    public static loginServices = {
        login: celsiaRouting.services.webService + 'login'
    }

    public static loggedServices = {
        crearRadicado: celsiaRouting.services.webService + 'radicado'
    }
}