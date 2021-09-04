import ServicesData from '../../data/Services.list'

export const totalServices = ServicesData.length;

export function getService(serviceId) {
    serviceId = serviceId > totalServices ? 1 : serviceId;
    return ServicesData.filter((s) => s.id === serviceId)[0]
}