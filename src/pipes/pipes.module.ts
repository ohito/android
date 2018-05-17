import { NgModule } from '@angular/core';
import { SearchPlantPipe } from './search-plant/search-plant';
import { SortPlantPipe } from './sort-plant/sort-plant';
import { SearchLocationPipe } from './search-location/search-location';
import { SortLocationPipe } from './sort-location/sort-location';
@NgModule({
	declarations: [SearchPlantPipe,
    SortPlantPipe,
    SearchLocationPipe,
    SortLocationPipe],
	imports: [],
	exports: [SearchPlantPipe,
    SortPlantPipe,
    SearchLocationPipe,
    SortLocationPipe]
})
export class PipesModule {}
