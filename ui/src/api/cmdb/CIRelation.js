import { axios } from '@/utils/request'

export function getFirstCIs (ciId) {
  return axios({
    url: '/v0.1/ci_relations/' + ciId + '/first_cis',
    method: 'GET'
  })
}

export function getSecondCIs (ciId) {
  return axios({
    url: '/v0.1/ci_relations/' + ciId + '/second_cis',
    method: 'GET'
  })
}
