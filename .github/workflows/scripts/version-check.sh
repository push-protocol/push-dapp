# Parsing json
# Source: https://stackoverflow.com/a/57973289
local_version="$(cat ./packages/react-app/package.json | tr { '\n' | tr , '\n' | tr } '\n' | grep "version" | awk  -F'"' '{print $4}')"
# Captured local version successfully

# Creates and cleans up tmp_dir folder
clean_up() {
  test -d "$tmp_dir" && rm -fr "$tmp_dir"
}
tmp_dir=$(mktemp -d 2>/dev/null || mktemp -d -t 'mytmpdir')
echo $tmp_dir
trap "clean_up $tmp_dir" EXIT

# Checking version between main and current branch
# Assumes that developer ALWAYS creates a feature branch to make any changes, 
# and does NOT touches main branch

cp -a ./ $tmp_dir
cd $tmp_dir
git fetch
git checkout main
main_version_local="$(cat ./packages/react-app/package.json | tr { '\n' | tr , '\n' | tr } '\n' | grep "version" | awk  -F'"' '{print $4}')"

# main_version_local 
# local_version

echo "main="
echo $main_version_local

echo "local="
echo $local_version

function _ver_higher {
        #sort both versions and compare
        ver=`echo -ne "$1\n$2" |sort -Vr |head -n1`
        if [ "$2" == "$1" ]; then
                return 1
        elif [ "$2" == "$ver" ]; then
                return 0
        else
                return 1
        fi
}

if _ver_higher $main_version_local $local_version; then
        echo "Pull Request created succesfully"
else
        echo "Pull Request invalid as version number has not been updated"
        exit 1
fi