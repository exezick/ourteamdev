import { useEffect } from 'react'

import { getService } from '../../core/helpers/service.helper'

export default function useServiceAutoSelectHook(setService) {
    useEffect(() => {
        const autoSelectService = setInterval(() => {
            setService((prevServiceId) => getService(parseInt(prevServiceId.id) + 1))
        }, 10000);
        return () => clearInterval(autoSelectService);
    }, [setService]);
}
