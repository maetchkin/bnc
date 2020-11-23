## bnc
Block's naming convention helper for React Elements
[BEM](https://en.bem.info/methodology/naming-convention)

#### package.json
```
dependencies:{
    ...
    "bnc": "github:maetchkin/bnc"
    ...
}

```

#### Usage

##### Block
```
  const block = new bnc( 'block' );
  ...
  <div className={block}/>
```

##### Modified Block
```
  const block = new bnc( 'block' );
  ...
  <div className={block.mod('mode')}/>
```

##### Element
```
  const block = new bnc( 'block' );
  ...
  <div className={block}/>
    <div className={block.el( 'element' )}/>
      ...
    </div>
  </div>
```

##### Modified Element
```
  const block = new bnc( 'block' );
  ...
  <div className={block}/>
    <div className={block.el( 'element' ).mod('mode')}/>
      ...
    </div>
  </div>
```

##### Boolean Modified Element
```
  const block = new bnc( 'block' );
  ...
  <div className={block}/>
    <div className={block.el( 'element' ).boolmod('mode', true)}/>
      ...
    </div>
  </div>
```

##### Maybe Boolean Modified Element
```
  const block = new bnc( 'block' );
  ...
  <div
    className={
        block +
        block.bod('active', true)
    }
  />
    <div
        className={
            block.el( 'element' ).mod('mode') +
            block.el( 'element' ).bod('active', true)
        }
    />
      ...
    </div>
  </div>
```

