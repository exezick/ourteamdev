import { useCallback, useState } from 'react'

import ServicesData from '../data/Services.list'

function getService(serviceId) {
  return ServicesData.filter((s) => s.id === serviceId)[0]
}

export default function useServiceHook(serviceId) {
  const [service, setService] = useState(() => getService(serviceId))

  const selectServiceOnChange = useCallback(
    function (event) {
      if (event.target.value)
        setService(getService(parseInt(event.target.value)))
    },
    [setService],
  )

  const selectServiceOnClick = useCallback(
    function (serviceId) {
      if (serviceId) setService(getService(parseInt(serviceId)))
    },
    [setService],
  )

  return [service, selectServiceOnChange, selectServiceOnClick]
}
