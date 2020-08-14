config_file=$1
if [ -z "$config_file" ]; then
    config_file='/workspace/links'
fi
while read line; do
    arr=($line)
    source=${arr[0]}
    source=${source}/*
    dest=${arr[1]}
    echo "$source"
    echo "$dest"
    ln -s $source $dest

done < $config_file