import _ from 'lodash';

//convert items array into lodash wrapper or object so that we can chain method.value() returns items to regular array
export function paginate(items: any, pageNumber: number, pageSize: number) {
  const startIndex = (pageNumber - 1) * pageSize;
    return  _(items)
      .slice(startIndex)
      .take(pageSize)
      .value(); 
}