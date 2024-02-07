- Adjust page performance
- Re-index query-json (when attributes are renamed it should be purged and use the new prop names)
- custom queryindex params (how to sync them, add, delete, e.g.)

# Ideen wie man die initialisierung flexibler macht

- man könnte callback funktionen verwenden um nach spezifischen Punkten in der initialisierung einen hook zu haben um changes aufzurufen. Bspw.

```
  private configureMainElement(main: HTMLElement) {
    main.setAttribute('id', 'main');
    >>> this.addSidebarContainer(main); >>> This could be replaced with a hook
    this.addInnerContainer(main);
  }
```
