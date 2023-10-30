import { Router } from 'express'
import { filter_paths } from '../middleware/filter_paths'
import { create_element, get_all_elements, get_element_by_field, get_element_by_fk, get_element_by_id, update_element } from '../controllers/general_controller';

export const general_module_router = Router()

general_module_router
  .get('/byID/:path/:id', filter_paths, get_element_by_id)
  .get('/byFK/:fk_path/:path/:pk', filter_paths, get_element_by_fk)
  .get('/byField/:path/:field/:payload', filter_paths, get_element_by_field)
  .get('/all/:path', filter_paths, get_all_elements);
  

//Create component
general_module_router.post('/:path', filter_paths, create_element);

//Patch
// general_module_router.patch('/:path/:id', filter_paths)

//Put
general_module_router.put('/:path/:id', filter_paths, update_element)

//Delete component
general_module_router.delete('/:path/:id', filter_paths);


