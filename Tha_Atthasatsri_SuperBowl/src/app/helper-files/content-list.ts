

// content-list.ts
import Content from './content-interface';

class Contentlist {
    static contentCount = 0
    private _items: Content[];

    constructor() {
        this._items = []; // initiallize array
    }


    getItems() : Content[] {
        return this._items;
    }


    displayFriendlyHtml(index : number) {
        const content = this._items[index];

        return `
        <p>ID: ${content.id}</p>
        <p>Title: ${content.title}</p>
        <p>Description: ${content.description}</p>
        <p>Creator: ${content.creator}</p>
        <p>Type: ${content.type}</p>
        <p>Img: ${content.imgUrl}</p>
        <p>Tag: ${content.tags}</p>
        `
    }

    increaseCount(): number {
    return ++ContentList.contentCount;
  }


}

