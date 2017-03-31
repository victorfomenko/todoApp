import { TodoApp2Page } from './app.po';

describe('todo-app2 App', () => {
  let page: TodoApp2Page;

  beforeEach(() => {
    page = new TodoApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
