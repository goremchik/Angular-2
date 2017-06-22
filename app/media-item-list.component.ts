import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'mw-media-item-list',
    templateUrl: 'app/media-item-list.component.html',
    styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {

    onMediaItemDelete(mediaItem) {
        console.log(mediaItem);
    }

    mediaItems = [{
        id: 1,
        name: "Firebug1",
        medium: "Series",
        category: "Drama",
        year: 2010,
        watchedOn: 1294166565384,
        isFavorite: true
    },
    {
        id: 2,
        name: "Firebug2",
        medium: "Movies",
        category: "Science fiction",
        year: 2011,
        watchedOn: 1294166565384,
        isFavorite: false
    }, {
        id: 3,
        name: "Firebug3",
        medium: "Series",
        category: "Action",
        year: 2013,
        watchedOn: 1294166565384,
        isFavorite: false
    }, {
        id: 4,
        name: "Firebug4",
        medium: "Series",
        category: "Science fiction",
        year: 2014,
        watchedOn: null,
        isFavorite: false
    }];
}